from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404

from .models import School
from .permissions import IsManager, IsProfileCompleted
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
        school = get_object_or_404(School, manager__id=request.user.id)
        return Response(data=school.to_json())
