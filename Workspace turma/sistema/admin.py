from django.contrib import admin
from sistema import models

@admin.register(models.Aluno)
class AlunoAdmin(admin.ModelAdmin):
    list_display = ('matricula', 'nome', 'sobrenome', 'idade', 'cpf', 'endereco', 'telefone', 'ativo', 'data_cadastro')

@admin.register(models.Professor)
class ProfessorAdmin(admin.ModelAdmin):
    list_display = ('disciplina', 'nome', 'sobrenome', 'idade', 'endereco', 'telefone', 'ativo', 'data_cadastro')

@admin.register(models.Turma)
class TurmaAdmin(admin.ModelAdmin):
    list_display = ('turma', 'turno', 'professor_id', 'aluno_id', 'ativo', 'data_cadastro', 'observacao')