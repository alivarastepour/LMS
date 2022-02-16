from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from StudyArena.models import Student, Teacher
from .serializers import UserSerializer
from .models import CustomUser
# import utils
import io
import requests

IMAGES_LOCATION = '/var/www/html/'  # TODO: set relative path


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
            if data['role'] == 'S':
                Student.objects.create(user=user)
            elif data['role'] == 'T':
                Teacher.objects.create(user=user)
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
            return 'مدیر'
        if role == 'S':
            return 'دانش آموز / دانشجو'
        if role == 'T':
            return 'دبیر / استاد'
        return 'ادمین'

    def file_handler(self, file, user_id, extension):
        # TODO: generate a random name to keep privacy
        with io.open(f'{IMAGES_LOCATION}/profilepic_{user_id}.{extension}', 'wb') as o:
            for b in file.readlines():
                o.write(b)
                o.flush()
        return f'profilepic_{user_id}.{extension}'

    def get(self, request, **kwargs):
        user = get_object_or_404(CustomUser, username=request.user.username)
        filter_option = kwargs.get('filter_option', 'all')
        if filter_option == 'role':
            return Response({
                'id': user.id,
                'role': 'manager' if user.role == 'M' else (
                    'student' if user.role == 'S' else 'teacher' if user.role == 'T' else 'admin'),
            }, status=200)
        return Response({
            # TODO: add picture address
            'id': user.id,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'username': user.username,
            'email': user.email,
            'address': user.address,
            'role': self.get_complete_role(user.role),
            'image': user.photo_link,
        }, status=200)

    def put(self, request):
        user = get_object_or_404(CustomUser, username=request.user.username)
        user_serializer = UserSerializer(instance=user, data={k: v for k, v in request.data.items() if k != 'role'},
                                         partial=True)
        try:
            f = request.FILES.getlist('image')[0]
            photo_name = self.file_handler(f, request.user.username, f.name.split('.')[-1])
            user.set_photo_link(photo_name)
            user.save()
        except Exception:
            pass
        if user_serializer.is_valid():
            user_serializer.save()
            return Response({
                'message': 'user data updated!',
                # TODO: delete useless params
                'id': request.user.id,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'username': user.username,
                'email': user.email,
                'address': user.address,
                'role': self.get_complete_role(user.role),
                'image': user.photo_link,
            }, status=200)
        return Response({
            'message': 'something is wrong!',
            'errors': user_serializer.errors
        }, status=400)
