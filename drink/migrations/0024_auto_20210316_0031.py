# Generated by Django 3.1.7 on 2021-03-15 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drink', '0023_auto_20210316_0027'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='order_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
