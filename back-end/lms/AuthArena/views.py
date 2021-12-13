from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
import requests


class SignUp(APIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def post(self, request):
        user = UserSerializer(data=request.data)
        if user.is_valid():
            user = user.save()
            response = requests.post('http://127.0.0.1:8000/auth/login/',
                                     data={'username': user.username, 'password': request.data.get('password', '')})
            return Response({'is_signed_up': True,
                             'is_logged_in': response.status_code == 200,
                             'token': response.json()['token'],
                             'message': 'OK',
                             })
        return Response({'is_signed_up': False,
                         'is_logged_in': False,
                         'token': '',
                         'message': user.errors,
                         })
