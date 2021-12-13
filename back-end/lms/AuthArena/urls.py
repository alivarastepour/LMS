from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import SignUp
urlpatterns = [
    path('login/', view=obtain_auth_token),
    path('signup/', SignUp.as_view()),
]
