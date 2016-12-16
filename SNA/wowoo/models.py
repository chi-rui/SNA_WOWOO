from __future__ import unicode_literals

from django.db import models

# Create your models here.
class user(models.Model):

	user_id = models.CharField(max_length=20)
	user_email = models.CharField(max_length=50)
	# user_photo = 

	def __unicode__(self):
		return self.user_id