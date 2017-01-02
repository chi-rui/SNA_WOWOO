from __future__ import unicode_literals

from django.db import models

# User data table.
class wowoo(models.Model):
    user_id = models.CharField(max_length=200,null = True,blank = True )
    user_name = models.CharField(max_length=200,null=True,blank=True)
    user_picture = models.URLField(max_length=200,null = True,blank = True)
    user_email = models.EmailField(null = True,blank = True)
    user_nickname = models.CharField(max_length=200,null=True,blank=True)
    user_achievement = models.IntegerField(default=0)
	 
    def key(self):
        return "wowoo"

# Post data table        
class Post(models.Model):
    post_title= models.CharField(max_length=50,null = True,blank = True )
    post_question = models.CharField(max_length=200,null = True,blank = True)
    post_content = models.CharField(max_length=200,null = True, blank = True)
    post_date = models.DateTimeField(auto_now_add = True,auto_now = False)
    post_emotions = models.PositiveIntegerField(default=0)
    likes = models.PositiveIntegerField(default=0)
    
    def post(self):
        return "post"

class Comment(models.Model):

    post_num = models.IntegerField(blank=True)
    commentEmotion = models.CharField(max_length=5)
    commentName = models.CharField(max_length=50)
    comment = models.TextField(blank=True)
    commentWows = models.IntegerField(default=0)
    commentDate = models.DateTimeField(auto_now_add=True)



    def __str__(self):
	    return (str)(self.post_num)

