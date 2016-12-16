from django.shortcuts import render
from django.http import HttpResponse
from .models import wowoo
from .models import Post
# Create your views here.
def getuserid(request) : 
    if request.method == 'GET':
        get_id=request.GET['userId']
        get_name=request.GET['userName']
        get_picture = request.GET['userPicture']
        get_email = request.GET['userEmail']
        
        if wowoo.objects.filter(user_id = get_id).exists():
            
            print "exists" 
        

        else: 
            wowoo.objects.create(
                user_id = get_id,
                user_name = get_name,
                user_picture = get_picture,
                user_email = get_email,
            )

    return HttpResponse(get_id)     
def home(request):
    posts = Post.objects.all()
    users = wowoo.objects.all()
    context = {
        "posts" : posts,
        "users" : users,
    }
    return render(request, 'wowoo/index.html',context)