from django.contrib import admin
from .models import wowoo
from .models import Post
from .models import Comment

# Register your models here.
admin.site.register(wowoo)
admin.site.register(Post)
admin.site.register(Comment)