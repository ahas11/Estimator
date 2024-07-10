from rest_framework import serializers
from .models import Wall

class WallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wall
        fields = '__all__'

class ExpenseSerializer(serializers.Serializer):
    sf_total_expense = serializers.FloatField()
    paint_total_expense = serializers.FloatField()
    labor_total_expense = serializers.FloatField()
    suits_total_expense = serializers.FloatField()
    truck_total_expense = serializers.FloatField()
    protection_total_expense = serializers.FloatField()
    total_expense = serializers.FloatField()
    total_sale = serializers.FloatField()