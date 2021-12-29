from rest_framework.permissions import BasePermission
from AuthArena.models import CustomUser


class IsManager(BasePermission):
    message = 'شما مدیر نیستید!'

    def has_permission(self, request, view):
        return request.user.role == 'M'


class IsTeacher(BasePermission):
    message = 'You Aren\'t A Teacher!'

    def has_permission(self, request, view):
        return request.user.role == 'T'


class IsStudent(BasePermission):
    message = 'You Aren\'t A Student!'

    def has_permission(self, request, view):
        return request.user.role == 'S'


class IsProfileCompleted(BasePermission):
    message = 'لطفا اطلاعات شصخی خود را تکمیل کنید.'

    def has_permission(self, request, view):
        return CustomUser.objects.get(username=request.user.username).is_completed()
