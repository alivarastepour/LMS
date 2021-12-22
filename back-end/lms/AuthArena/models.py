from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    role = models.CharField(choices=[('A', 'Admin'),
                                     ('M', 'Manager'),
                                     ('T', 'Teacher'),
                                     ('S', 'Student')],
                            max_length=1)

    @property
    def fullname(self):
        return self.first_name + ' ' + self.last_name
