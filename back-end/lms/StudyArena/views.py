from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .permissions import IsManager
from rest_framework.views import APIView
from .serilizers import SchoolSerializer


class NewSchool(APIView):
    serializer_class = SchoolSerializer
    permission_classes = (IsAuthenticated, IsManager)

    def post(self, request):
        school = SchoolSerializer(data=request.data)
        if school.is_valid():
            school.save()
            return Response(data={'message': f'{request.data["name"]} successfully created.'}, status=200)
        return Response(data={'message': 'some fields are missing.', 'errors': school.errors}, status=400)

