from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WallViewSet, CalculateExpensesView, index

router = DefaultRouter()
router.register(r'walls', WallViewSet)

urlpatterns = [
    path('', index, name='index'),
    path('api/', include(router.urls)),
    path('api/calculate-expenses/', CalculateExpensesView.as_view(), name='calculate-expenses'),
]