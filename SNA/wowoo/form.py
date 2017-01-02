from django import forms
from .models import wowoo
from .models import Post
from .models import Comment

class PostForm(forms.ModelForm):
	class Meta:
		model = Post
		fields = ['poster_id', 'post_num', 'title', 'content', 'content_mark', 'wows', 'postDate']

class CommentForm(forms.ModelForm):
	class Meta:
		model = Comment
		fields = ['post_num', 'commentEmotion', 'commentName', 'comment', 'commentWows', 'commentDate',]

from .models import Post

# class AddForm(forms.Form):
class AddForm(forms.Form):
	model = Post
	fields = ('user_Id', 'post_Num', 'post_Title', 'post_Dialogue','post_Emotion','post_Likes')

