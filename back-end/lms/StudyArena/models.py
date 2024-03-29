from django.contrib import admin
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
    manager = models.OneToOneField(CustomUser, on_delete=models.DO_NOTHING, null=True)
    accepted = models.BooleanField(default=False)
    denied = models.BooleanField(default=False)
    suspended = models.BooleanField(default=False)
    photo_link = models.URLField(default=IMAGE_URL + 'default.jpg')
    linked_manager = models.ForeignKey(CustomUser, related_name='linked_manager', on_delete=models.DO_NOTHING,
                                       null=True)

    @property
    def status(self):
        if self.suspended:
            return 'suspended'
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

    def to_json_set2(self, student_or_teacher, role):
        return {
            'id': self.id,
            'school_id': self.school_id,
            'name': self.name,
            'address': self.address,
            'image': self.photo_link,
            'manager': self.manager.fullname if self.manager is not None else "",
            'classes': [clazz.to_json() for clazz in self.class_set.all()
                        if student_or_teacher not in clazz.student_set.all()] if role == 'S'
            else [clazz.to_json() for clazz in self.class_set.all()
                  if student_or_teacher not in clazz.teacher_set.all()]
        }

    def to_json_set3(self):
        return {
            'id': self.id,
            'school_id': self.school_id,
            'name': self.name,
            'status': self.status,
            'manager': self.linked_manager.fullname if self.linked_manager is not None else "",
        }

    def set_photo_link(self, name):
        self.photo_link = IMAGE_URL + name
        self.save()

    def __str__(self):
        return self.name + " : " + self.school_id


class Class(models.Model):
    name = models.CharField(max_length=50)
    school = models.ForeignKey(School, on_delete=models.CASCADE)
    meetingID = models.CharField(default='', max_length=20)
    welcome = models.CharField(max_length=1000, default='خوش آمدید.')
    duration = models.IntegerField(default=0)
    moderatorPW = models.CharField(default='m0D3R@1oR', max_length=10)
    attendeePW = models.CharField(default='@tT3nd33', max_length=10)
    record = models.BooleanField(default=True)
    autoStartRecording = models.BooleanField(default=True)
    webcamsOnlyForModerator = models.BooleanField(default=True)
    maxParticipants = models.IntegerField(default=0)
    allowStartStopRecording = models.BooleanField(default=True)
    slides = models.TextField(default='localhost/whiteboard.pdf\n')
    selected_slides = models.TextField(default='localhost/whiteboard.pdf\n')

    def get_slides(self):
        return [{"selected": True if slide in self.selected_slides else False, "url": slide} for slide in
                self.slides.rstrip().split('\n')]

    def to_json(self):
        teacher = self.teacherrequest_set.filter(status__exact='accepted')
        return {
            "id": self.id,
            "name": self.name,
            "teacher": teacher[0].teacher.user.fullname if teacher.count() != 0 else "unknown",
        }

    def get_settings(self):
        return {
            "id": self.id,
            "name": self.name,
            "meetingID": self.meetingID,
            "welcome": self.welcome,
            "duration": self.duration,
            "record": self.record,
            "autoStartRecording": self.autoStartRecording,
            "webcamsOnlyForModerator": self.webcamsOnlyForModerator,
            "maxParticipants": self.maxParticipants,
            "allowStartStopRecording": self.allowStartStopRecording,
        }

    def get_settings_set2(self):
        return {
            **self.get_settings(),
            "moderatorPW": self.moderatorPW,
            "attendeePW": self.attendeePW,
        }

    def __str__(self):
        return self.school.name + "->" + self.name


class Teacher(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.DO_NOTHING)
    classes = models.ManyToManyField(Class)

    def __str__(self):
        return self.user.fullname


class Manager(models.Model):
    pass


class Student(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.DO_NOTHING)
    classes = models.ManyToManyField(Class)

    def __str__(self):
        return self.user.fullname


class StudentRequest(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    clazz = models.ForeignKey(Class, on_delete=models.CASCADE)
    status = models.CharField(max_length=8, default='pending')

    def __str__(self):
        return self.student.user.fullname + "->" + " (" + self.clazz.__str__() + ") " + ": " + self.status


class TeacherRequest(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    clazz = models.ForeignKey(Class, on_delete=models.CASCADE)
    status = models.CharField(max_length=8, default='pending')

    def __str__(self):
        return self.teacher.user.fullname + "->" + " (" + self.clazz.__str__() + ") " + ": " + self.status


admin.site.register(School)
admin.site.register(Class)
admin.site.register(Teacher)
admin.site.register(Manager)
admin.site.register(Student)
admin.site.register(StudentRequest)
admin.site.register(TeacherRequest)
