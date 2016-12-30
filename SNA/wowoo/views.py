from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Post
from form import AddForm
# Create your views here.

# def home(request):

# 	Posts = Post.objects.all()
# 	context = {
# 		'p' : Posts,
# 	}

# 	return render(request, 'wowoo/index.html', context)

def test(request):

	return render(request, 'wowoo/test.html')

def home(request):

	Posts = Post.objects.all()
	context = {
		'p' : Posts,
	}
	if request.method == "POST":
		print "hello"
		django_form = AddForm(request.POST) # add a new form correspond to the html form
		if django_form.is_valid(): # check if all the attributes have value

			"""Assign data in django form to local variables"""
			New_user_Id = 0
			New_post_Num = 999
			New_post_Title = django_form.data.get("title")
			New_post_Dialogue = "I hate you django"

			print New_post_Title
			""" Mmodel connects to database and create a new data """
			Post.objects.create(
				user_Id = New_user_Id,
				post_Num = New_post_Num,
				post_Title = New_post_Title,
				post_Dialogue = New_post_Dialogue,
			)

			# Posts = Posts.objects.all()
			# context = {
			# 	'p' : Posts,
			# }
			return render(request, 'wowoo/index.html', context)

		else:
			""" redirect to the same page if django_form goes wrong """
			return render(request, 'wowoo/index.html', context)
	else:
		return render(request, 'wowoo/index.html', context)