from rest_framework.permissions import BasePermission


class IsManager(BasePermission):

    def has_permission(self, request, view):
        return request.user.role == 'M'


class IsTeacher(BasePermission):
    
    def has_permission(self, request, view):
        return request.user.role == 'T'


class IsStudent(BasePermission):

    def has_permission(self, request, view):
        return request.user.role == 'S'
