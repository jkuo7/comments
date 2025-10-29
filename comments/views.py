from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from comments.models import Comment
from comments.serializers import CommentSerializer
from rest_framework import permissions, viewsets, filters


class CommentViewSet(viewsets.ModelViewSet):

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [filters.SearchFilter]
    search_fields = ["text"]

    def perform_create(self, serializer):

        if "parent" in self.request.data:
            parent = get_object_or_404(Comment, pk=self.request.data["parent"])
            serializer.save(parent=parent)
        else:
            serializer.save()
