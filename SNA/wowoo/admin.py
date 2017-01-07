from django.contrib import admin
from .models import Wowoo
from .models import Post
from .models import Comment

# Register your models here.
class wowoo(admin.ModelAdmin) :
    list_display = ['user_id','user_name','user_picture','user_email','user_nickname','user_achievement']
    class Meta : 
        model = Wowoo
        
admin.site.register(Wowoo,wowoo)

class post(admin.ModelAdmin) :
    list_display = ['id','post_title','post_question','post_content','post_date','post_emotions','likes']
    class Meta : 
        model = Post
        
admin.site.register(Post,post)

class comment(admin.ModelAdmin) :
    list_display = ['id','comment_emotion','comment_name','comment_content','comment_wows','comment_date','get_postpk']
    
    def get_postpk(self, obj):
    	return obj.post.pk
    get_postpk.admin_order_field = 'post' #Allows column order sorting
    get_postpk.short_description = 'post' #Renames column head

    class Meta : 
        model = Comment
        
admin.site.register(Comment,comment)
