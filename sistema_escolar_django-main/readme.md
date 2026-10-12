Sobre o Projeto

Um sistema voltado para escolas criado com base no framework django, tendo sido realizado a criação do app portal, classes, formularios e urls para a pagina web do sistema


Erros do código no projeto Sistema Escolar

1 `urls.py (sistema)` - não possui um caminho para a view do cadastro impossibilitando de acessar a pagina, necessitando import das urls do portal
2 `settings.py` - ausência da definição do app portal em apps instalados 
3 `models.py` - ausência de import do timezone causando um erro em parâmetros das classes
4 `models.py` - em Aluno matricula o campo correto deve ser charfield() ao inves de integerfild() visto que não serão realizados operações com a matrícula
5 `views.py(portal)` - ausência de import da HTTP oque impossibilita da função retornar uma resposta em uma pagina web
6 `forms.py` - erro na maneira de como classe Professor visto que models.py está na mesma pasta que o arquivo de formulários
7 `admin.py` - na classe ProfessorAdmin o parâmetro "especialidade" não existe na classe Professor em models.py
8 `urls.py(portal)` - erro de caminho do sistema

Grupo

Gabriel Regis, Cauã Vitor, Felipe Silveira