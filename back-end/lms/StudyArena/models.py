from django.db import models
from AuthArena.models import CustomUser


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
            'status': self.status
        }


class Class(models.Model):
    pass


class Teacher(models.Model):
    pass


class Manager(models.Model):
    pass


class Student(models.Model):
    pass
