from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'predefined-texts', views.PredefinedTextViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('compare-text/', views.compare_text, name='compare-text'),
]