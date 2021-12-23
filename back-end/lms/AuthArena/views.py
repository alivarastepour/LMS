from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from .models import CustomUser
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


class Profile(APIView):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_complete_role(self, role):
        if role == 'M':
            return 'manager'
        if role == 'S':
            return 'student'
        if role == 'T':
            return 'teacher'
        return 'admin'

    def get(self, request):
        return Response({
            # TODO: add picture address
            'id': request.user.id,
            'firstname': request.user.first_name,
            'lastname': request.user.last_name,
            'username': request.user.username,
            'email': request.user.email,
            'address': request.user.address,
            'role': self.get_complete_role(request.user.role),
        }, status=200)

    def put(self, request):
        user = get_object_or_404(CustomUser, username=request.user.username)
        user_serializer = UserSerializer(instance=user, data=request.data, partial=True)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response({
                'message': 'user data updated!'
            }, status=200)
        return Response({
            'message': 'something is wrong!'
        }, status=400)
