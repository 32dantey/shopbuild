# Generated by Django 3.1.7 on 2021-04-04 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drink', '0030_auto_20210402_1705'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='total_amount',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]