from django.contrib import admin
from .models import wowoo
from .models import Post
from .models import Comment

# Register your models here.
class Wowoo(admin.ModelAdmin) :
    list_display = ['id']
    class Meta : 
        model = wowoo
        
admin.site.register(wowoo,Wowoo)

class post(admin.ModelAdmin) :
    list_display = ['id']
    class Meta : 
        model = Post
        
admin.site.register(Post,post)
admin.site.register(Comment)

