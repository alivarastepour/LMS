from django.shortcuts import render
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
import requests


class SignUp(APIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def post(self, request):
        data = {'username': request.data['username'],
                'password': request.data['password'],
                'email': request.data['email']}
        if 'مدیر' in request.data['role']:
            data['role'] = 'M'
        if 'استاد' in request.data['role']:
            data['role'] = 'T'
        if 'دانشجو' in request.data['role']:
            data['role'] = 'S'
        user = UserSerializer(data=data)
        if user.is_valid():
            user = user.save()
            response = requests.post('http://127.0.0.1:8000/auth/login/',
                                     data={'username': user.username, 'password': request.data.get('password', '')})
            return Response({'is_signed_up': True,
                             'is_logged_in': response.status_code == 200,
                             'token': response.json()['token'],
                             'message': 'OK',
                             }, status=200)
        return Response({'is_signed_up': False,
                         'is_logged_in': False,
                         'token': '',
                         'message': user.errors,
                         }, status=403)
