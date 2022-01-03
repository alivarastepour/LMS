from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import School, Class
from .permissions import IsManager, IsProfileCompleted, IsTeacher
from rest_framework.views import APIView
from .serilizers import SchoolSerializer
import io

IMAGES_LOCATION = '/var/www/html/'  # TODO: set relative path


class SchoolView(APIView):
    serializer_class = SchoolSerializer
    permission_classes = (IsAuthenticated, IsProfileCompleted, IsManager)

    def post(self, request):
        school = SchoolSerializer(data=request.data)
        if school.is_valid():
            school.save(manager=request.user)
            return Response(data={'message': f'{request.data["name"]} successfully created.'}, status=200)
        return Response(data={'message': 'some fields are missing.', 'errors': school.errors}, status=400)

    def get(self, request):
        try:
            school = School.objects.get(manager__username=request.user.username)
        except Exception as _:
            return Response(data={
                "has_requested": False
            }, status=200)
        res_dic = school.to_json()
        return Response(data=res_dic)

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
    permission_classes = (IsAuthenticated, IsProfileCompleted, IsManager | IsTeacher)

    def get(self, request):
        try:
            all_classes = request.user.school.class_set.all()
        except Exception:
            return Response(data={'details': 'شما مدرسه ای ندارید.'}, status=400)
        output = []
        for cls in all_classes:
            class_requests = cls.studentrequest_set.all()
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


class TeacherRequests(APIView):
    permission_classes = (IsAuthenticated, IsProfileCompleted, IsManager)

    def get(self, request):
        try:
            all_classes = request.user.school.class_set.all()
        except Exception:
            return Response(data={'details': 'شما مدرسه ای ندارید.'}, status=400)
        output = []
        for cls in all_classes:
            class_requests = cls.teacherrequest_set.all()
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
