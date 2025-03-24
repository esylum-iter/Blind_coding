from rest_framework import serializers
from .models import PredefinedText

class PredefinedTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = PredefinedText
        fields = ['id', 'content', 'encoded_content', 'created_at', 'updated_at', 'is_active']
        read_only_fields = ['created_at', 'updated_at', 'encoded_content']

class TextComparisonSerializer(serializers.Serializer):
    user_text = serializers.CharField(required=True)