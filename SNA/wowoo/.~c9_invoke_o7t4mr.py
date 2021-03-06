from django.shortcuts import render, render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.utils.encoding import smart_text
from .models import Wowoo
from .models import Post, Comment
# Create your views here.
def getuserid(request) : 
    if request.method == 'GET':
        get_id=request.GET['userId']
        get_name=request.GET['userName']
        get_picture = request.GET['userPicture']
        get_email = request.GET['userEmail']
        # login set session state
        request.session['uName'] = get_name;
        request.session['uId'] = get_id;

        if Wowoo.objects.filter(user_id = get_id).exists():
            print ("exits")
            return HttpResponseRedirect("https://sna-wowoo-wenxuanlee.c9users.io/logined")
        else: 
            Wowoo.objects.create(
                user_id = get_id,
                user_name = get_name,
                user_picture = get_picture,
                user_email = get_email,
            )

    return HttpResponse(get_id)     

def logined(request):
    get_user = Wowoo.objects.get( user_id = request.session['uId'])
    user = Wowoo.objects.all()
    post = Post.objects.all().order_by("-likes")
    context={
        "users" : user,
        "get" : get_user,
        "posts" : post,
      
    }
    print user
    return render(request, 'wowoo/wowoo_login.html',context)

def home(request):
    post = Post.objects.all().order_by("-likes")
    user = Wowoo.objects.all()
    p

    # obj = Post.objects.get(pk)
    # print obj
    # print obj.post_content
    # str_part = obj.post_content.split('###')
    # n = 0
    # sub_num = len(str_part)-1
    # while n < len(str_part)-1:
    #     print str_part[n]
    #     n += 1
    # loop_times = range(0,int(sub_num)-1)
    # print str_part
    # print sub_num
    context = {
        "posts" : post,
        "users" : user,
        # "str_part" : str_part,
        # "loop_times" : loop_times,
    }
    return render(request, 'wowoo/index.html',context)
    
def test(request):
    post = Post.objects.all()
    user = Wowoo.objects.all()
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

        # cut string and get every part of it 
        str_part = local_content.split('###')
        n = 0
        sub_num = len(str_part)-1
        while n < len(str_part)-1:
            print str_part[n]
            n += 1
        # cut end here
        U = request.session.get('uName')
        # Create new data 
        Post.objects.create (
            post_title = local_title,
            post_question = local_question,
            post_content = local_content,
            wowoo = Wowoo.objects.get(user_name=U),
            )
    return HttpResponseRedirect('https://sna-wowoo-wenxuanlee.c9users.io/logined/')

def post_detail(request, pk):

    post = Post.objects.get(pk = pk)
    
    str_part = post.post_content.split('###')

    cmt = Comment.objects.filter(post = pk)
    
    context = {
        "count" : count,
        "post" : post,
        "str_part" : str_part,
        "comments" : cmt,
    }
    return render(request, 'wowoo/content.html',context)

def comment(request, pk):
    if request.method == 'POST' and request.is_ajax():
        localURL = '/post/' + pk
        
        local_comment_content = request.POST['textData']
        U = request.session.get('uName') 

        Comment.objects.create(
            comment_name = U,
            comment_content = local_comment_content,
            post = Post.objects.get(pk = pk),
        )

        user = Wowoo.objects.all()
        post = Post.objects.get(pk = pk)   
        str_part = post.post_content.split('###')
        cmt = Comment.objects.filter(post = pk)

        context = {
        "users" : user,
        "post" : post,
        "str_part" : str_part,
        "comments" : cmt,
        }

        # #currentURL = post/pk/
        # request.path = request.path.rsplit('/', 2)[0]

        return render_to_response("wowoo/content.html", context)
    
def sort_post(request): 
    if request.method == "POST" and request.is_ajax():
        field = request.POST['field']      
        if field == 'new':
            post = Post.objects.all().order_by("-post_date")
        elif field == 'hot':
            post = Post.objects.all().order_by("-likes")
        else:
            postss = Post.objects.all()
            U = request.session.get('uName') 
            print U
            post = postss.filter(wowoo__user_name=U)
        # print "field: " + field
        # print "OOOOOOOO in !"
    # else:
        # print "XXXXXXXX no in"

    user = Wowoo.objects.all()
    cmt = Comment.objects.all()
    context = {
        "posts" : post,
        "users" : user,
        "comments" : cmt,
    }
    return render_to_response('wowoo/index.html', context)


