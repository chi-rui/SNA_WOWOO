# -*- coding: utf-8 -*-
# Generated by Django 1.9.12 on 2016-12-30 08:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wowoo', '0007_remove_post_post_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='post_Date',
            field=models.DateTimeField(),
        ),
    ]
