from __future__ import unicode_literals

from django.db import models

# Create your models here.
class wowoo(models.Model):
    user_id = models.CharField(max_length=200,null = True,blank = True )
    user_name = models.CharField(max_length=200,null=True,blank=True)
    user_picture = models.URLField(max_length=200,null = True,blank = True)
    user_email = models.EmailField(null = True,blank = True)
    user_nickname = models.CharField(max_length=200,null=True,blank=True)
    user_achievement = models.IntegerField(default=0)
	 
    def key(self):
        return "wowoo"
        
class Post(models.Model):
    post_title= models.CharField(max_length=50,null = True,blank = True )
    post_question = models.CharField(max_length=200,null = True,blank = True)
    likes = models.PositiveIntegerField(default=0)

    def post(self):
        return "post"