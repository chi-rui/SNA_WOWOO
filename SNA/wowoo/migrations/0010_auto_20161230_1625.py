# -*- coding: utf-8 -*-
# Generated by Django 1.9.12 on 2016-12-30 08:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wowoo', '0009_auto_20161230_1610'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='post_Date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]