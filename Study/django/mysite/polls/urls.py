from django.urls import path
from django.urls.resolvers import URLPattern

from . import views

app_name = 'polls'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:question_id>/', views.detail, name='detail'),
    path('<int:question_id>/result/', views.result, name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
]