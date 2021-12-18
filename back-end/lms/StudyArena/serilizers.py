from rest_framework import serializers
from .models import School


class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = ('school_id', 'name', 'address')

    def create(self, validated_data):
        s = School.objects.create(**validated_data)
        s.save()
        return s
