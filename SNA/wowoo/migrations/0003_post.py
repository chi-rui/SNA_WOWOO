# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-12-16 12:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wowoo', '0002_auto_20161216_0953'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('post_title', models.CharField(blank=True, max_length=50, null=True)),
                ('post_question', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
    ]
