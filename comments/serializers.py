from rest_framework import serializers
from comments.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ["id", "author", "text", "date", "likes", "image"]

    author = serializers.ReadOnlyField()
    likes = serializers.ReadOnlyField()
    image = serializers.ReadOnlyField()
