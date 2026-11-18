# Anotações

`Modularização` -> criação de pastas(módulos) que contenham arquivos que contizem com o proposito da pasta de modo a destrinchar e organizar arquivos e códigos do projeto
`Crud` -> modelagems de dados do backend pro DB e vice-versa.  (Create,Read,Update,Delete)

## Métodos HTTP
`Get`-> busca
`Post` -> postar
`Put` -> alterar
`Delete`-> deletar

## Anotações 

. Static e Templates não devem ficar na raiz mas sim incluidos num projeto (pasta onde esta o arquivo settings.py) mapeados no settings.py. <as pastas templates e static são módulos>
. Views armazenam funções ate serem chamadas por um path <URL> atraves do dos métodos HTTP, geralmente pelo requisição tipo Get
. Todos os módulos precisam de um arquivo inicializador <__init__.py> para chamar os arquivos utlizados dentro do módulo
. A tag "{% load static %} " é obrigatoria antes de utilizar a tag "{% static %}"