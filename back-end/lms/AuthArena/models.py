from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    role = models.CharField(choices=[('A', 'Admin'),
                                     ('M', 'Manager'),
                                     ('T', 'Teacher'),
                                     ('S', 'Student')],
                            max_length=1)
    address = models.CharField(max_length=512, null=True, blank=True,default='')

    # TODO: add picture
    @property
    def fullname(self):
        return self.first_name + ' ' + self.last_name
