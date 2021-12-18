from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import SignUp, WhoAmI
urlpatterns = [
    path('login/', view=obtain_auth_token),
    path('signup/', SignUp.as_view()),
    path('whoami/', WhoAmI.as_view()),
]
