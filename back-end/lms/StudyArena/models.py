from django.db import models


class School(models.Model):
    school_id = models.CharField()
    name = models.CharField(max_length=100, null=False, blank=False)
    address = models.CharField(max_length=500, null=True)
    accepted = models.BooleanField(default=False)
    denied = models.BooleanField(default=False)

class Class(models.Model):
    pass


class Teacher(models.Model):
    pass


class Manager(models.Model):
    pass


class Student(models.Model):
    pass
