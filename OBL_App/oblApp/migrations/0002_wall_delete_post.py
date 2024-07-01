# Generated by Django 5.0.6 on 2024-07-01 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('oblApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Wall',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('length', models.FloatField()),
                ('height', models.FloatField()),
                ('thickness', models.FloatField()),
                ('paint', models.BooleanField(default=False)),
                ('time', models.IntegerField()),
                ('profit', models.FloatField()),
            ],
        ),
        migrations.DeleteModel(
            name='Post',
        ),
    ]
