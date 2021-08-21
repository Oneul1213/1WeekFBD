from django.shortcuts import render
from rest_framework import generics, serializers

from django.http import HttpResponse

from .models import Post
from .serializers import PostSerializer

# Create your views here.
def index(request):
    return HttpResponse('index view')

class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
