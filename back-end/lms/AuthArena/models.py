from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    role = models.CharField(choices=[('A', 'Admin'),
                                     ('M', 'Manager'),
                                     ('T', 'Teacher'),
                                     ('S', 'Student')],
                            max_length=1)
