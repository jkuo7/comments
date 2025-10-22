from rest_framework import serializers
from comments.models import Comment


class RecursiveSerializer(serializers.Serializer):
    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data


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

    children = RecursiveSerializer(many=True, read_only=True)
