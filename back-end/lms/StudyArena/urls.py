from django.urls import path
from .views import SchoolView, StudentRequests, TeacherRequests, ClassView, StudentView

urlpatterns = [
    path('school/', SchoolView.as_view()),
    path('school/<str:school_username>/', SchoolView.as_view()),
    path('class/', ClassView.as_view()),
    path('class/<int:class_id>/', ClassView.as_view()),
    path('student-list/', StudentRequests.as_view()),
    path('teacher-list/', TeacherRequests.as_view()),
    path('teacher-request/<int:teacher_id>/', TeacherRequests.as_view()),
    path('student-request/<int:student_id>/', StudentRequests.as_view()),
    path('student-request/', StudentRequests.as_view()),
    path('teacher-request/', TeacherRequests.as_view()),
    path('student/classes/<str:school_id>/', StudentView.as_view(mode='classes'),),
    path('student/classes/', StudentView.as_view(mode='classes'), ),
    path('student/schools/', StudentView.as_view(mode='schools'), ),
]
