from django.db import models

class Wall(models.Model):
    length = models.FloatField(null=False)
    height = models.FloatField(null=False)
    thickness = models.FloatField(null=False)
    paint = models.BooleanField(null=False, default = False)
    time = models.IntegerField(null=False)
    profit = models.FloatField(null=False)
