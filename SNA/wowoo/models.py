from __future__ import unicode_literals

from django.db import models

# Create your models here.
class wowoo(models.Model):

	 user_id = models.CharField(max_length=50)

class Post(models.Model):
	
	poster_id = models.CharField(max_length=50)
	post_num = models.IntegerField(blank=True)
	title = models.CharField(max_length=100)
	content = models.TextField(blank=True)
	content_mark = models.BooleanField()
	wows = models.IntegerField(default=0)
	postDate = models.DateTimeField(auto_now_add=True)

	def __unicode__(self):
		return self.title

class Comment(models.Model):

	post_num = models.IntegerField(blank=True)
	commentEmotion = models.CharField(max_length=5)
	commentName = models.CharField(max_length=50)
	comment = models.TextField(blank=True)
	commentWows = models.IntegerField(default=0)
	commentDate = models.DateTimeField(auto_now_add=True)



	def __str__(self):
		return (str)(self.post_num)

