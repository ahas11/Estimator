from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EstimateViewSet, ClientViewSet, ScopeOfWorkViewSet, InsulationViewSet, SprayFoamViewSet, WallViewSet, CalculateExpensesView, index

router = DefaultRouter()
router.register(r'walls', WallViewSet)
router.register(r'estimates', EstimateViewSet)
router.register(r'clients', ClientViewSet)
router.register(r'scope-of-work', ScopeOfWorkViewSet)
router.register(r'insulations', InsulationViewSet)
router.register(r'spray-foams', SprayFoamViewSet)

urlpatterns = [
    path('', index, name='index'),
    path('api/', include(router.urls)),
    path('api/calculate-expenses/', CalculateExpensesView.as_view(), name='calculate-expenses'),
]