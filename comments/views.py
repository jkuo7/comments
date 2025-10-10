from comments.models import Comment
from comments.serializers import CommentSerializer
from rest_framework import permissions, viewsets
from rest_framework.decorators import action


class CommentViewSet(viewsets.ModelViewSet):

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.AllowAny]
