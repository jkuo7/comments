from django.test import TestCase
from comments.models import Comment
from comments.serializers import CommentSerializer


# Create your tests here.
class CommentTestCase(TestCase):
    def test_serializer(self):
        c1 = Comment.objects.create(text="c1")
        c2 = Comment.objects.create(text="c2", parent=c1)
        c3 = Comment.objects.create(text="c3", parent=c2)
        self.assertEqual(c1.children.get(), c2)
        self.assertEqual(c2.children.get(), c3)

        s1 = CommentSerializer(c1)
        s2 = CommentSerializer(c2)
        s3 = CommentSerializer(c3)
        self.assertEqual(s1.data["children"][0], s2.data)
        self.assertEqual(s1.data["children"][0]["children"][0], s3.data)
