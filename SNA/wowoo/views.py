from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context
from wowoo.models import Post, Comment
# Create your views here.

def home(request):
	cont = Post.objects.all()
	cmt = Comment.objects.all()
	context = Context ({
		'posts':cont,
		'comments':cmt
	})
	return render(request, 'wowoo/index.html', context)

def post_detail(request, pk):
	cmt = Comment.objects.filter(post_num = pk)
	post = Post.objects.get(pk = pk)
	context = Context ({
		'comments':cmt,
		'post':post
	})
	return render(request, 'wowoo/content.html', context)