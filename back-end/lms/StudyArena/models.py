from django.db import models
from AuthArena.models import CustomUser


class School(models.Model):
    school_id = models.CharField(max_length=25,unique=True)
    name = models.CharField(max_length=100, null=False, blank=False)
    address = models.CharField(max_length=500, null=True)
    # TODO: change manager relation to : one to many
    #  OR
    #  delete denied School after save new school
    manager = models.OneToOneField(CustomUser, on_delete=models.DO_NOTHING)
    accepted = models.BooleanField(default=False)
    denied = models.BooleanField(default=False)

    def to_json(self):
        return {
            'school_id': self.school_id,
            'name': self.school_id,
            'address': self.address,
            'accepted': self.accepted,
            'denied': self.denied
        }


class Class(models.Model):
    pass


class Teacher(models.Model):
    pass


class Manager(models.Model):
    pass


class Student(models.Model):
    pass
