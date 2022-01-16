from django.urls import path
from .views import SchoolView, StudentRequests, TeacherRequests, ClassView

urlpatterns = [
    path('school/', SchoolView.as_view()),
    path('class/', ClassView.as_view()),
    path('student-list/', StudentRequests.as_view()),
    path('teacher-list/', TeacherRequests.as_view()),
    path('teacher-request/<int:teacher_id>', TeacherRequests.as_view())
]
