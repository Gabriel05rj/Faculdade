from django.contrib import admin
from django.urls import path,include 
import portal.urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(portal.urls)),
]

# erro1: não possui um caminho para a view do cadastro, necessitando import das urls do portal