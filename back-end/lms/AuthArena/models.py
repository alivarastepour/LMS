from django.db import models
from django.contrib.auth.models import AbstractUser

# TODO: collect all CONSTS to one file
IMAGE_URL = 'http://localhost/'


class CustomUser(AbstractUser):
    role = models.CharField(choices=[('A', 'Admin'),
                                     ('M', 'Manager'),
                                     ('T', 'Teacher'),
                                     ('S', 'Student')],
                            max_length=1)
    address = models.CharField(max_length=512, null=True, blank=True, default='')
    photo_link = models.URLField(default=IMAGE_URL + 'default.jpg')

    @property
    def fullname(self):
        return self.first_name + ' ' + self.last_name

    def set_photo_link(self, name):
        self.photo_link = IMAGE_URL + name
        self.save()
