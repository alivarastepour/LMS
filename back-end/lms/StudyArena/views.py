from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import School
from .permissions import IsManager, IsProfileCompleted, IsTeacher
from rest_framework.views import APIView
from .serilizers import SchoolSerializer


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


class StudentRequests(APIView):
    permission_classes = (IsAuthenticated, IsProfileCompleted, IsManager | IsTeacher)

    def get(self, request):

        all_classes = request.user.school.class_set.all()

        output = []
        for cls in all_classes:
            class_requests = cls.studentrequest_set.all()
            for req in class_requests:
                output.append(
                    {
                        'student': {
                            'name': req.student.user.fullname,
                            'email': req.student.user.email,
                            'photo': req.student.user.photo_link
                        },
                        'class': {
                            'name': req.clazz.name,
                            'school_name': req.clazz.school.name
                        },
                        'status': req.status
                    }
                )
        return Response(data={'requests': output}, status=200)
