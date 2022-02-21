from typing import Union

from django.db import IntegrityError
from django.db.models import Q
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from . import BBBApiConnection, utils

from .models import School, Class, TeacherRequest, StudentRequest, Student, Teacher
from .permissions import IsManager, IsProfileCompleted, IsTeacher, IsStudent, IsAdmin
from rest_framework.views import APIView
from .serilizers import SchoolSerializer, ClassSerializer
import io

IMAGES_LOCATION = '/var/www/html'  # TODO: set relative path


class SchoolView(APIView):
    serializer_class = SchoolSerializer
    permission_classes = (IsAuthenticated, IsProfileCompleted)

    def post(self, request):
        school = SchoolSerializer(data=request.data)
        if school.is_valid():
            school.save(manager=request.user)
            return Response(data={'message': f'{request.data["name"]} successfully created.'}, status=200)
        return Response(data={'message': 'some fields are missing.', 'errors': school.errors}, status=400)

    def get(self, request, **kwargs):
        school_username = kwargs.get('school_username', None)
        if school_username is None:
            # in this case we return a school that belong to request.user
            try:
                school = School.objects.get(manager__username=request.user.username)
            except Exception as _:
                return Response(data={
                    "has_requested": False
                }, status=200)
            res_dic = school.to_json()
            return Response(data=res_dic)
        else:
            # in this case we return all schools that their ids contains `school_username`
            schools = School.objects.filter(school_id__icontains=school_username)
            return Response(data=[
                {**school.to_json_set2(request.user.student_set.all().last() if request.user.role == 'S'
                                       else request.user.teacher_set.all().last(), request.user.role)}
                for school in schools
            ], status=200)

    def file_handler(self, file, school_id, extension):
        # TODO: generate a random name to keep privacy
        with io.open(f'{IMAGES_LOCATION}/profilepic_{school_id}.{extension}', 'wb') as o:
            for b in file.readlines():
                o.write(b)
                o.flush()
        return f'profilepic_{school_id}.{extension}'

    def put(self, request):
        school = get_object_or_404(School, manager__username=request.user.username)
        school_serializer = SchoolSerializer(school, request.data, partial=True)
        try:
            f = request.FILES.getlist('image')[0]
            photo_name = self.file_handler(f, school.school_id, f.name.split('.')[-1])
            school.set_photo_link(photo_name)
            school.save()
        except Exception:
            pass

        if school_serializer.is_valid():
            school_serializer.save()
            return Response(data=school.to_json(), status=200)
        return Response(data={'message': 'something is wrong.', 'errors': school_serializer.errors}, status=400)


class StudentRequests(APIView):
    permission_classes = (IsAuthenticated, IsProfileCompleted)

    def get_accepted(self, school):
        return StudentRequest.objects.filter(clazz__school=school).filter(status='accepted')

    def get_rejected(self, school):
        return StudentRequest.objects.filter(clazz__school=school).filter(status='rejected')

    def get_pending(self, school):
        return StudentRequest.objects.filter(clazz__school=school).filter(status='pending')

    def get(self, request):
        filter_option = request.data.get('filter', 'all')
        query_sets = []
        try:
            if filter_option == 'all':
                query_sets.append(self.get_pending(request.user.school))
                query_sets.append(self.get_accepted(request.user.school))
                query_sets.append(self.get_rejected(request.user.school))
            elif filter_option == 'pending':
                query_sets.append(self.get_pending(request.user.school))
            elif filter_option == 'accepted':
                query_sets.append(self.get_accepted(request.user.school))
            elif filter_option == 'rejected':
                query_sets.append(self.get_rejected(request.user.school))
        except Exception:
            return Response(data={'details': 'شما مدرسه ای ندارید.'}, status=400)
        output = []
        for class_requests in query_sets:
            # all_classes = query_set.objects.all()
            # for cls in all_classes:
            #     class_requests = cls.studentrequest_set.all()
            for req in class_requests:
                output.append(
                    {
                        'id': req.id,
                        'class_name': req.clazz.name,
                        'name': req.student.user.fullname,
                        'username': req.student.user.username,
                        'photo': req.student.user.photo_link,
                        'status': req.status
                    }
                )
        return Response(data={'requests': output}, status=200)

    def post(self, request, **kwargs):
        student_id = kwargs.get('student_id', None)
        if student_id is not None:
            # in this case manager wants to accept or reject the requested student
            student_req = get_object_or_404(StudentRequest, id=student_id)
            if request.data.get('operation', 'rejected') == 'accepted':
                student_req.status = 'accepted'
                student_req.student.classes.add(student_req.clazz)
                student_req.save()
                return Response(data={'message': f'Student {student_req.student.user.fullname} accepted for Class '
                                                 f'{student_req.clazz.name}'}, status=200)
            else:
                student_req.status = 'rejected'
                student_req.save()
                return Response(data={'message': f'Student {student_req.student.user.fullname} rejected for Class '
                                                 f'{student_req.clazz.name}'}, status=200)
        else:
            # in this case student wants to request to join to some classes.
            classes = request.data.get('classes', [])
            student = Student.objects.get(user=request.user)
            for clazz in classes:
                StudentRequest.objects.create(student=student, clazz_id=clazz)
            return Response({
                "message": "join request sent."
            })


class TeacherRequests(APIView):
    permission_classes = (IsAuthenticated, IsProfileCompleted)

    def get_accepted(self, school):
        return TeacherRequest.objects.filter(clazz__school=school).filter(status='accepted')

    def get_rejected(self, school):
        return TeacherRequest.objects.filter(clazz__school=school).filter(status='rejected')

    def get_pending(self, school):
        return TeacherRequest.objects.filter(clazz__school=school).filter(status='pending')

    def get(self, request):

        filter_option = request.data.get('filter', 'all')
        query_sets = []
        try:
            if filter_option == 'all':
                query_sets.append(self.get_pending(request.user.school))
                query_sets.append(self.get_accepted(request.user.school))
                query_sets.append(self.get_rejected(request.user.school))
            elif filter_option == 'pending':
                query_sets.append(self.get_pending(request.user.school))
            elif filter_option == 'accepted':
                query_sets.append(self.get_accepted(request.user.school))
            elif filter_option == 'rejected':
                query_sets.append(self.get_rejected(request.user.school))
        except Exception:
            return Response(data={'details': 'شما مدرسه ای ندارید.'}, status=400)
        output = []
        for class_requests in query_sets:
            for req in class_requests:
                output.append(
                    {
                        'id': req.id,
                        'name': req.teacher.user.fullname,
                        'username': req.teacher.user.username,
                        'photo': req.teacher.user.photo_link,
                        'class_name': req.clazz.name,
                        'status': req.status
                    }
                )
        return Response(data={'requests': output}, status=200)

    def post(self, request, **kwargs):
        teacher_id = kwargs.get('teacher_id', None)
        if teacher_id is not None:
            # in this case manager wants to accept or reject a teacher request
            teacher_req = get_object_or_404(TeacherRequest, id=teacher_id)
            if request.data.get('operation', 'rejected') == 'accepted':
                teacher_req.status = 'accepted'
                teacher_req.teacher.classes.add(teacher_req.clazz)
                teacher_req.save()
                return Response(data={'message': f'Teacher {teacher_req.teacher.user.fullname} accepted for Class '
                                                 f'{teacher_req.clazz.name}'}, status=200)
            else:
                teacher_req.status = 'rejected'
                teacher_req.save()
                return Response(data={'message': f'Teacher {teacher_req.teacher.user.fullname} rejected for Class '
                                                 f'{teacher_req.clazz.name}'}, status=200)
        else:
            # in this case teacher wants to send join request.
            classes = request.data.get('classes', [])
            teacher = Teacher.objects.get(user=request.user)
            for clazz in classes:
                TeacherRequest.objects.create(teacher=teacher, clazz_id=clazz)
            return Response({
                "message": "join request sent."
            })


class ClassView(APIView):
    serializer_class = ClassSerializer
    permission_classes = (IsAuthenticated, IsManager | IsTeacher)

    def get(self, request, *args, **kwargs):
        clazz_id = kwargs.get('class_id', None)
        if clazz_id is None:
            try:
                classes = Class.objects.filter(school__id__exact=request.user.school.id)
            except Exception:
                return Response({"class_count": 0}, status=200)

            return Response({"class_count": classes.all().count(), "classes": [
                clazz.to_json() for clazz in classes]}, status=200)
        else:
            clazz = get_object_or_404(Class, id=clazz_id)
            return Response(data={
                **clazz.get_settings()
            }, status=200)

    def post(self, request):
        class_serializer = ClassSerializer(data=request.data, partial=True)
        if class_serializer.is_valid():
            school = School.objects.get(manager__username=request.user.username)

            clazz = class_serializer.save(school=school)
            clazz.meetingID = f'{clazz.school.school_id}_{clazz.id}'
            clazz.save()
            return Response(data={
                **clazz.to_json(),
                "message": "Class Successfully created."}, status=200)
        # TODO: avoid duplicate naming...
        return Response(data={
            "message": "Something is wrong!",
        }, status=400)

    def put(self, request, class_id):
        clazz = get_object_or_404(Class, id=class_id)
        class_serializer = ClassSerializer(instance=clazz, data=request.data, partial=True)
        if class_serializer.is_valid():
            class_serializer.save()
            return Response(data={"message": "Class Successfully updated."}, status=200)
        return Response(data={
            "message": "Something is wrong!",
        }, status=400)

    def delete(self, request, class_id):
        try:
            clazz = get_object_or_404(Class, id=class_id)
            clazz.delete()
            return Response(data={"message": f"Class {clazz.name} deleted."})
        except Exception:
            return Response(data={
                "message": "Something is wrong!",
            }, status=400)


class StudentView(APIView):
    permission_classes = (IsAuthenticated, IsManager | IsStudent)
    mode = ''

    def get(self, request, **kwargs):
        student_id = request.user.id
        if self.mode == 'classes':
            school_id = kwargs.get('school_id', None)
            if school_id is not None:
                classes = School.objects.get(school_id=school_id).class_set.filter(student__user__id=student_id)
                return Response(data=[
                    {**clazz.to_json()} for clazz in classes
                ], status=200)
            else:
                return Response(data=[
                    {**clazz.to_json()} for clazz in Student.objects.get(user__id=student_id).classes.all()
                ], status=200)
        else:
            s = set()
            for clazz in Student.objects.get(user__id=student_id).classes.all():
                s.add(clazz.school)
            return Response(data=[
                {'school_id': school.school_id, 'name': school.name} for school in s
            ], status=200)


class TeacherView(APIView):
    permission_classes = (IsAuthenticated, IsManager | IsTeacher)
    mode = ''

    def get(self, request, **kwargs):
        teacher_id = request.user.id
        if self.mode == 'classes':
            school_id = kwargs.get('school_id', None)
            if school_id is not None:
                classes = School.objects.get(school_id=school_id).class_set.filter(teacher__user__id=teacher_id)
                return Response(data=[
                    {**clazz.to_json()} for clazz in classes
                ], status=200)
            else:
                return Response(data=[
                    {**clazz.to_json()} for clazz in Teacher.objects.get(user__id=teacher_id).classes.all()
                ], status=200)
        else:
            s = set()
            for clazz in Teacher.objects.get(user__id=teacher_id).classes.all():
                s.add(clazz.school)
            return Response(data=[
                {'school_id': school.school_id, 'name': school.name} for school in s
            ], status=200)


class MeetingView(APIView):
    permission_classes = (IsAuthenticated, IsProfileCompleted)
    get_mode = ''

    # TODO: add permission to each method...
    def get(self, request, class_id):
        cls = get_object_or_404(Class, id=class_id)
        if self.get_mode == 'info':
            # in this case we return class and meeting info
            info = BBBApiConnection.get_meeting_info(meetingID=cls.meetingID)
            return Response(data={
                'name': cls.name,
                'teacher': cls.teacher_set.last().user.fullname if cls.teacher_set.count() != 0 else 'unknown',
                'is_running': info[1],
                'join_link': BBBApiConnection.join(fullName=request.user.fullname, meetingID=cls.meetingID,
                                                   password=cls.moderatorPW if
                                                   request.user.role == 'M' or request.user.role == 'T'
                                                   else cls.attendeePW) if info[1] else '',
                'start_meeting_data': info[3],
            }, status=200)
        elif self.get_mode == 'record':
            # in this case we return playbacks of a meeting
            recordings = BBBApiConnection.get_recordings(meetingID=cls.meetingID)
            return Response(data=recordings[1], status=200)
        elif self.get_mode == 'slide':
            return Response(
                data=cls.get_slides(), status=200)

    def post(self, request, class_id):
        cls = get_object_or_404(Class, id=class_id)
        if cls.school.status == 'suspended':
            return Response(data={
                'message': 'مدرسه شما توسط ادمین به حالت تعلیق درآمده است. لطفا با مدیریت سایت تماس برقرار کنید.'
            }, status=403)
        return Response(data={
            'success': BBBApiConnection.create(**cls.get_settings_set2()),
            'join_link': BBBApiConnection.join(fullName=request.user.fullname, meetingID=cls.meetingID,
                                               password=cls.moderatorPW),
        }, status=200)

    def put(self, request, class_id):
        cls = Class.objects.get(id=class_id)
        try:
            for key in request.FILES.keys():
                for file in request.FILES.getlist(key):
                    final_file_path = utils.file_handler(file, f'{cls.school.school_id}/{class_id}', file.name)
                    to_add = 'localhost' + final_file_path + '\n'
                    cls.slides = cls.slides + to_add
                    cls.selected_slides = cls.selected_slides + to_add
        except Exception as _:
            pass
        cls.save()
        return Response(data=cls.get_slides(), status=200)

    def delete(self, request, class_id):
        cls = Class.objects.get(id=class_id)
        urls = request.data.get("delete")
        selected = request.data.get("select")
        cls.selected_slides = ('\n'.join(selected)) + '\n'.lstrip()
        try:
            for url in urls:
                if url in cls.slides:
                    utils.file_remover(url)
                    cls.slides = cls.slides.replace(url, "").replace("\n\n", "")
                    cls.selected_slides = cls.selected_slides.replace(url, "").replace("\n\n", "")
                else:
                    cls.save()
                    return Response(data={"result": "Not Found!"}, status=404)
        except Exception as _:
            cls.save()
            return Response(data={"result": "error"}, status=500)
        cls.save()
        return Response(data={"result": "ok"}, status=200)


class AdminView(APIView):
    permission_classes = (IsAdmin,)
    mode = ''

    def get(self, request, **kwargs):
        if self.mode == 'schools':
            filter_option = kwargs.get('filter_option', None)
            # query_set = [school for school in
            #              (School.objects.all() if filter_option is None else School.objects.all()) if
            #              school.status == filter_option]
            # query_set.reverse()
            query_set = []
            for school in School.objects.all():
                if filter_option is not None and not school.status == filter_option:
                    continue
                query_set.append(school.to_json_set3())
            query_set.reverse()
            return Response(data=query_set, status=200)
        elif self.mode == 'meetings':
            status, meetings = BBBApiConnection.get_meetings()
            return Response(data=[
                {
                    'meetingName': meeting[0],
                    'meetingID': meeting[1],
                    'participantCount': meeting[2],
                    'hasUserJoined': meeting[3],
                } for meeting in meetings
            ], status=200)

    def post(self, request, **kwargs):
        if self.mode == 'schools':
            operation = request.data['operation']
            school_id = kwargs['school_id']
            school = School.objects.get(school_id=school_id)
            if operation == 'accepted':
                school.suspended = False
                school.accepted = True
                school.denied = False
                school.manager = school.linked_manager
            elif operation == 'rejected':
                school.suspended = False
                school.accepted = False
                school.denied = True
                school.manager = None
            elif operation == 'suspended':
                school.accepted = False
                school.denied = False
                school.suspended = True
            try:
                school.save()
            except IntegrityError as _:
                return Response(status=400)
            return Response(status=201)
        if self.mode == 'meeting':
            # in this case admin wants to enter the meeting that sent its id
            cls = Class.objects.get(id=kwargs.get('class_id'))
            result = BBBApiConnection.join(excludeFromDashboard='true', fullName='ADMIN', password=cls.meetingID)
            return Response(data={
                'join_link': result,
            }, status=200)
