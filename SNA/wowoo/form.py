from django import forms
from .models import Post

# class AddForm(forms.Form):
class AddForm(forms.Form):
	model = Post
	fields = ('user_Id', 'post_Num', 'post_Title', 'post_Dialogue','post_Emotion','post_Likes')