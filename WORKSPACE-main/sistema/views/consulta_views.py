from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# VIEWS -> retornam algo, são funções, request -> response
# View responsável pela tela inicial do consulta
def consulta_view(request):
    print('Página consulta funcionou')
    return HttpResponse('Página inicial do consulta')


