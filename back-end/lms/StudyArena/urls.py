from django.urls import path
from .views import SchoolView, StudentRequests, TeacherRequests, ClassView, StudentView, TeacherView, MeetingView, \
    AdminView, GuestView

urlpatterns = [
    path('school/', SchoolView.as_view()),
    path('school/<str:school_username>/', SchoolView.as_view()),
    path('class/', ClassView.as_view()),
    path('class/<int:class_id>/', ClassView.as_view()),
    path('class/<int:class_id>/name/', GuestView.as_view()),

    path('class/<int:class_id>/info/', MeetingView.as_view(get_mode='info')),
    path('class/<int:class_id>/recordings/', MeetingView.as_view(get_mode='record')),
    path('class/<int:class_id>/create/', MeetingView.as_view()),
    path('class/<int:class_id>/join/', GuestView.as_view()),
    path('class/<int:class_id>/slide/', MeetingView.as_view(get_mode='slide')),

    path('student-list/', StudentRequests.as_view()),
    path('teacher-list/', TeacherRequests.as_view()),
    path('teacher-request/<int:teacher_id>/', TeacherRequests.as_view()),
    path('student-request/<int:student_id>/', StudentRequests.as_view()),
    path('student-request/', StudentRequests.as_view()),
    path('teacher-request/', TeacherRequests.as_view()),
    path('student/classes/<str:school_id>/', StudentView.as_view(mode='classes'), ),
    path('student/classes/', StudentView.as_view(mode='classes'), ),
    path('student/schools/', StudentView.as_view(mode='schools'), ),

    path('teacher/classes/<str:school_id>/', TeacherView.as_view(mode='classes'), ),
    path('teacher/classes/', TeacherView.as_view(mode='classes'), ),
    path('teacher/schools/', TeacherView.as_view(mode='schools'), ),

    path('admin/schools/', AdminView.as_view(mode='schools')),
    path('admin/schools/<str:filter_option>/', AdminView.as_view(mode='schools')),
    path('admin/school/<str:school_id>/', AdminView.as_view(mode='schools')),
    path('admin/meetings/', AdminView.as_view(mode='meetings')),
    path('admin/meetings/<str:meetingID>/join/', AdminView.as_view(mode='meeting')),
    path('admin/meetings/<str:meetingID>/end/', AdminView.as_view()),
]
