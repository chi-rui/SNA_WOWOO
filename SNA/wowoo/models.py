from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Post(models.Model):

	user_Id = models.CharField(max_length=20, default=0)
	post_Num = models.CharField(max_length=20, default=0)
	post_Title = models.CharField(max_length=50, default=0)
	post_Dialogue = models.CharField(max_length=50, default=0)
	# post_Content = models.DateField()									#error
	post_Date = models.DateTimeField(auto_now_add=True) 
	post_Emotion = models.CharField(max_length=5)
	post_Likes = models.IntegerField(default=0)


	# user_photo = 

	# def __str__(self):
	def __unicode__(self):
		return self.user_Id

	class Meta:
		ordering = ['post_Num']
			
