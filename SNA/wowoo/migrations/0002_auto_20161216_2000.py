# -*- coding: utf-8 -*-
# Generated by Django 1.9.12 on 2016-12-16 12:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wowoo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='user',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=20)),
                ('user_email', models.CharField(max_length=50)),
            ],
        ),
        migrations.DeleteModel(
            name='wowoo',
        ),
    ]