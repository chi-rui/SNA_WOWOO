from django.contrib import admin
from .models import Post

# Register your models here.
# admin.site.register(User)

class PostAdmin(admin.ModelAdmin):
	list_display = ('user_Id','post_Num','post_Title','post_Dialogue','post_Emotion','post_Likes','post_Date')
	# fields = 
	readonly_fields = ('post_Date',)

	# def date(self, instance):
	# 	 default = timezone.now

	ordering = ('user_Id',)


admin.site.register(Post, PostAdmin)