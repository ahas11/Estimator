from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from .models import Wall
from .serializers import WallSerializer


def index(request):
    return render(request, 'index.html')

class WallViewSet(viewsets.ModelViewSet):
    queryset = Wall.objects.all()
    serializer_class = WallSerializer