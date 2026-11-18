from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    # return HttpResponse('Página inicial')
    return render(
        request,
        'portal/index.html',
        )
#Redundancia na utilização de template/
def cadastro(request):
    return HttpResponse('Página inicial do cadastro')

#erro 5: ausência de import da HTTP oque impossibilita da função retornar uma resposta em uma pagina web