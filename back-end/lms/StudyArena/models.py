from django.db import models
from AuthArena.models import CustomUser

IMAGE_URL = 'http://localhost/'

class School(models.Model):
    school_id = models.CharField(max_length=25, unique=True)
    name = models.CharField(max_length=100, null=False, blank=False)
    address = models.CharField(max_length=500, null=True)
    # TODO: change manager relation to : one to many
    #  OR
    #  delete denied School after save new school
    manager = models.OneToOneField(CustomUser, on_delete=models.DO_NOTHING)
    accepted = models.BooleanField(default=False)
    denied = models.BooleanField(default=False)
    photo_link = models.URLField(default=IMAGE_URL + 'default.jpg')

    @property
    def status(self):
        if not self.accepted and not self.denied:
            return 'pending'
        if self.accepted:
            return 'accepted'
        return 'rejected'

    def to_json(self):
        return {
            'has_requested': True,
            'school_id': self.school_id,
            'name': self.name,
            'address': self.address,
            'status': self.status,
            'image': self.photo_link
        }

    def set_photo_link(self, name):
        self.photo_link = IMAGE_URL + name
        self.save()


class Class(models.Model):
    name = models.CharField(max_length=50)
    school = models.ForeignKey(School, on_delete=models.CASCADE)


class Teacher(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.DO_NOTHING)
    classes = models.ManyToManyField(Class)


class Manager(models.Model):
    pass


class Student(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.DO_NOTHING)
    classes = models.ManyToManyField(Class)


class StudentRequest(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    clazz = models.ForeignKey(Class, on_delete=models.CASCADE)
    status = models.CharField(max_length=8, default='pending')


class TeacherRequest(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    clazz = models.ForeignKey(Class, on_delete=models.CASCADE)
    status = models.CharField(max_length=8, default='pending')
