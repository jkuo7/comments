from rest_framework import serializers
from comments.models import Comment
from django_rest_framework_recursive.fields import RecursiveField


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            "id",
            "author",
            "text",
            "date",
            "likes",
            "image",
            "parent",
            "children",
        ]
        read_only_fields = ["author", "likes", "image", "parent"]

    children = RecursiveField(many=True, read_only=True)
