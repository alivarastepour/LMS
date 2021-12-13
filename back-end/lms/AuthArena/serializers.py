from rest_framework import serializers
from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'password', 'email')

    def create(self, validated_data):
        user = CustomUser.objects.create(username=validated_data['username'],
                                         email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        return user