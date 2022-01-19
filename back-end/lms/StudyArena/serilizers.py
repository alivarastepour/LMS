from rest_framework import serializers
from .models import School, Class


class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = ('school_id', 'name', 'address')

    def create(self, validated_data):
        s = School.objects.create(**validated_data)
        s.save()
        return s


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ('__all__')

    def create(self, validated_data):
        c = Class.objects.create(**validated_data)
        c.save()
        return c

