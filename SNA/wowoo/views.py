from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import wowoo
from django.template import Context
from .models import Post, Comment
>>>>>>> master
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
    post = Post.objects.all()
    user = wowoo.objects.all()
    context = {
        "posts" : post,
        "users" : user,
    }
    return render(request, 'wowoo/index.html',context)
    
def test(request):
    post = Post.objects.all()
    user = wowoo.objects.all()
    context = {
        "posts" : post,
        "users" : user,
    }
    return render(request, 'wowoo/test.html',context)

def like_count_blog(request):
    liked = False
    if request.method == 'GET':
        post_id = request.GET['post_id']
        post = Post.objects.get(id=int(post_id))
        if request.session.get('has_liked_'+post_id, liked):
            print("unlike")
            if post.likes > 0:
                likes = post.likes - 1
                try:
                    del request.session['has_liked_'+post_id]
                except KeyError:
                    print("keyerror")
        else:
            print("like")
            request.session['has_liked_'+post_id] = True
            likes = post.likes + 1
    post.likes = likes
    post.save()
    return HttpResponse(likes, liked)
    
def post(request):
    if request.method == 'POST':
        
        # Get how many dialogs
        local_count = request.POST['count']
        
        # Get specific question
        local_option = request.POST['optradio']
        
        # Get title
        local_title = request.POST['post_title']
        
        # Get question dialog
        local_question = request.POST['content' + local_option]
        
        # conbine the dialog to a whole content
        local_content = ""
        i = 0;
        count = int(local_count) - 1;
        while i <= count:
            global local_content 
            local_content += request.POST['gender' + str(i)] + "###"
            local_content += request.POST['content' + str(i)] + "###" 
            i += 1
        # Create new data 
        Post.objects.create (
            post_title = local_title,
            post_question = local_question,
            post_content = local_content,
            )
    return HttpResponseRedirect('http://localhost:8000/')

def post_detail(request, pk):
    cmt = Comment.objects.filter(post_num = pk)
    post = Post.objects.get(pk = pk)
    context = Context ({
        'comments':cmt,
        'post':post
    })
    return render(request, 'wowoo/content.html', context)
