from rest_framework import serializers
from .models import Wall, Estimate, Client, ScopeOfWork, Insulation, SprayFoam

class ClientSerializer(serializers.ModelSerializer):
    estimates = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Client
        fields = '__all__'

class EstimateSerializer(serializers.ModelSerializer):
    client = serializers.PrimaryKeyRelatedField(queryset=Client.objects.all())

    class Meta:
        model = Estimate
        fields = '__all__'

class ScopeOfWorkSerializer(serializers.ModelSerializer):
    estimate = serializers.PrimaryKeyRelatedField(queryset=Estimate.objects.all())

    class Meta:
        model = ScopeOfWork
        fields = '__all__'

class InsulationSerializer(serializers.ModelSerializer):
    scope = serializers.PrimaryKeyRelatedField(queryset=ScopeOfWork.objects.all())

    class Meta:
        model = Insulation
        fields = '__all__'

class SprayFoamSerializer(serializers.ModelSerializer):
    insulation = serializers.PrimaryKeyRelatedField(queryset=Insulation.objects.all())

    class Meta:
        model = SprayFoam
        fields = '__all__'

class WallSerializer(serializers.ModelSerializer):
    spray_foam = serializers.PrimaryKeyRelatedField(queryset=SprayFoam.objects.all())

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