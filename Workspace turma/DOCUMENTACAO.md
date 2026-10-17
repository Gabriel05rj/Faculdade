# Verbos https
GET
POST
PUT
DELETE

# CRUD Backend <-> BD
C -> create: é quando eu crio algo no DB
R -> read: é quando consumo dados do DB
U -> update: é quando algo no DB é alterado
D -> delete: é quando você EXCLUI algo no DB

# Comandos do Django

1 - ``pip install django`` -> instala o django no projeto
2 - ``django-admin startproject nome_do_projeto`` -> Cria um novo projeto em django
3 - ``python manage.py runserver`` -> Subindo um servidor 
4 - ``python manage.py startapp nome_do_app`` -> Cria um novo app
5 - ``python manage.py migrate`` -> Realiza as migrações(ativas) do projeto
6 - ``python manage.py createsuperuser`` -> Criar um novo super usuário (admin)
7 - ``python manage.py changepassword nomedousuario`` -> Altera a senha do usuário
8 - ``python manage.py makemigrations`` -> Cria/gera um novo pacote de migração(Útil para novo app e alteração no DB)

* ctrl + . -> para abrir a aba de seleção de importar classes para uma aba