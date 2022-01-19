from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import SignUp, Profile, CustomLogin
urlpatterns = [
    path('login/', CustomLogin.as_view()),
    path('signup/', SignUp.as_view()),
    path('whoami/', Profile.as_view()),
    path('whoami/<str:filter_option>/', Profile.as_view()),
]
