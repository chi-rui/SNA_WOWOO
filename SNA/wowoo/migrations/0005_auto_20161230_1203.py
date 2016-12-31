# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-12-30 12:03
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('wowoo', '0004_post_likes'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='post_content',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='post_date',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2016, 12, 30, 12, 3, 13, 50061, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='post_emotions',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
