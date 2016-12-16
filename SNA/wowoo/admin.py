from django.contrib import admin
from .models import wowoo
from .models import Post
# Register your models here.
class Wowoo(admin.ModelAdmin) :
    list_display = ['user_id','user_name','user_picture','user_email','user_nickname','user_achievement']
    class Meta : 
        model = wowoo
        
admin.site.register(wowoo,Wowoo)

class post(admin.ModelAdmin) :
    list_display = ['post_title','post_question']
    class Meta : 
        model = Post
        
admin.site.register(Post,post)