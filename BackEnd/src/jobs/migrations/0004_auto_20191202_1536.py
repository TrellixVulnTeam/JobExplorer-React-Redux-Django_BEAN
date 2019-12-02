# Generated by Django 2.2.7 on 2019-12-02 20:36

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0003_auto_20191202_1529'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='job',
            name='id',
        ),
        migrations.AddField(
            model_name='job',
            name='job_uuid',
            field=models.UUIDField(default=uuid.UUID('d0e026b6-fa4a-436f-86b7-eec29a91440f'), editable=False, primary_key=True, serialize=False),
        ),
    ]
