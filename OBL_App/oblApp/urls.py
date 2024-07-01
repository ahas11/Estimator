from django.urls import path, include
from .views import index
from rest_framework.routers import DefaultRouter
from .views import WallViewSet

router = DefaultRouter()
router.register(r'walls', WallViewSet)

urlpatterns = [
    path('', index, name='index'),
    path('api/', include(router.urls)),
]