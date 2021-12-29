from django.urls import path
from .views import SchoolView

urlpatterns = [
    path('school/', SchoolView.as_view())
]
