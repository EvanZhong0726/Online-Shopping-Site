# Generated by Django 4.0.4 on 2022-04-19 20:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('company', models.CharField(max_length=50)),
                ('category', models.CharField(max_length=50)),
                ('rating', models.DecimalField(blank=True, decimal_places=2, max_digits=3)),
                ('reviews', models.IntegerField(blank=True, default=0)),
                ('price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('inventory', models.IntegerField(blank=True, default=0)),
                ('description', models.TextField(blank=True)),
                ('dateAdded', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
