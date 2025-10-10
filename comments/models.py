from django.db import models


class Comment(models.Model):

    author = models.TextField(default="Admin")
    text = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)
    image = models.URLField(blank=True)

    class Meta:
        ordering = ["-date"]

    def __str__(self):
        return self.text
