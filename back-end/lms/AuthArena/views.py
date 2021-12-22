from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
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
        if 'manager' in request.data['role']:
            data['role'] = 'M'
        if 'teacher' in request.data['role']:
            data['role'] = 'T'
        if 'student' in request.data['role']:
            data['role'] = 'S'
        user = UserSerializer(data=data)
        if user.is_valid():
            user = user.save()
            response = requests.post('http://127.0.0.1:8000/auth/login/',
                                     data={'username': user.username, 'password': request.data.get('password', '')})
            return Response({
                'id': user.id,
                'is_signed_up': True,
                'is_logged_in': response.status_code == 200,
                'token': response.json()['token'],
                'message': 'OK',
            }, status=200)
        return Response({'is_signed_up': False,
                         'is_logged_in': False,
                         'token': '',
                         'message': user.errors,
                         }, status=403)

class CustomLogin(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        user = self.serializer_class(data=request.data)
        if user.is_valid():
            validated_user = user.validated_data['user']
            tk, created = Token.objects.get_or_create(user=validated_user)
            return Response(data={
                'id': validated_user.pk,
                'token': tk.key,
            }, status=200)
        return Response(data={
            'id': 'null',
            'token': 'null',
        }, status=400)



class WhoAmI(APIView):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        return Response({'role': request.user.role}, status=200)
