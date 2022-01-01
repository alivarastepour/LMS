from django.urls import path
from .views import SchoolView,StudentRequests

urlpatterns = [
    path('school/', SchoolView.as_view()),
    path('student-list/', StudentRequests.as_view())
]
