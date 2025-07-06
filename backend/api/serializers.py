from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'  # Include all fields

class JobCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ('title', 'description')  # Only include title and description for creation
