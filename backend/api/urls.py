from django.urls import path
from .views import Home, JobsApiView


urlpatterns = [
    path('', Home.as_view()),
    path('jobs/', JobsApiView.as_view(), name='jobs'),
]
