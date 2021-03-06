from __future__ import unicode_literals

from django.db import models

# User data table.
class Wowoo(models.Model):
    user_id = models.CharField(max_length=200,null = True,blank = True )
    user_name = models.CharField(max_length=200,null=True,blank=True)
    user_picture = models.URLField(max_length=200,null = True,blank = True)
    user_email = models.EmailField(null = True,blank = True)
    user_nickname = models.CharField(max_length=200,null=True,blank=True)
    user_achievement = models.IntegerField(default=0)
     
    def key(self):
        return "Wowoo"

# Post data table        
class Post(models.Model):
    post_title= models.CharField(max_length=50,null = True,blank = True )
    post_question = models.CharField(max_length=200,null = True,blank = True)
    post_content = models.CharField(max_length=200,null = True, blank = True)
    post_date = models.DateTimeField(auto_now_add = True,auto_now = False)
    post_emotions = models.PositiveIntegerField(default=0)
    likes = models.PositiveIntegerField(default=0)
    wowoo = models.ForeignKey(Wowoo, on_delete=models.CASCADE, null=True)
    def post(self):
        return "post"

# Comment data table.
class Comment(models.Model):
    comment_emotion = models.CharField(max_length=5, null = True, blank = True)
    comment_name = models.CharField(max_length=50, null = True, blank = True)
    comment_content = models.TextField(null = True, blank=True)
    comment_wows = models.IntegerField(default=0)
    comment_date = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def comment(self):
        return "comment"