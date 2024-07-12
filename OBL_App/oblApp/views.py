from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from .models import SprayFoam, Insulation, Wall, Estimate, Client, ScopeOfWork
from .serializers import SprayFoamSerializer, InsulationSerializer, ScopeOfWorkSerializer, WallSerializer, ExpenseSerializer, EstimateSerializer, ClientSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

def index(request):
    return render(request, 'index.html')

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class EstimateViewSet(viewsets.ModelViewSet):
    queryset = Estimate.objects.all()
    serializer_class = EstimateSerializer

class ScopeOfWorkViewSet(viewsets.ModelViewSet):
    queryset = ScopeOfWork.objects.all()
    serializer_class = ScopeOfWorkSerializer

class InsulationViewSet(viewsets.ModelViewSet):
    queryset = Insulation.objects.all()
    serializer_class = InsulationSerializer

class SprayFoamViewSet(viewsets.ModelViewSet):
    queryset = SprayFoam.objects.all()
    serializer_class = SprayFoamSerializer

class WallViewSet(viewsets.ModelViewSet):
    queryset = Wall.objects.all()
    serializer_class = WallSerializer

class CalculateExpensesView(APIView):

    def post(self, request, *args, **kwargs):
        print("POST method called")  # Debug statement
        serializer = WallSerializer(data=request.data)
        if serializer.is_valid():
            wall = Wall(**serializer.validated_data)
            expenses = wall.calculate_expenses()
            expense_data = {
                'sf_total_expense': expenses[0],
                'paint_total_expense': expenses[1],
                'labor_total_expense': expenses[2],
                'suits_total_expense': expenses[3],
                'truck_total_expense': expenses[4],
                'protection_total_expense': expenses[5],
                'total_expense': expenses[6],
                'total_sale': expenses[7]
            }
            expense_serializer = ExpenseSerializer(expense_data)
            return Response(expense_serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)