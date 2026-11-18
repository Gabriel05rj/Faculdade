from django.db import models
from django.utils  import timezone

class Aluno(models.Model):
    matricula = models.CharField(max_length=10)
    nome = models.CharField(max_length = 20)
    sobrenome = models.CharField(max_length=30)
    idade = models.IntegerField()
    cpf = models.CharField(max_length=11)
    endereco = models.CharField(max_length=50)
    telefone = models.CharField(max_length=13)
    ativo = models.BooleanField(default=True)
    data_cadastro = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.nome}'
    
class Professor(models.Model):
    disciplina = models.CharField(max_length=25)
    nome = models.CharField(max_length=20)
    sobrenome = models.CharField(max_length=30)   
    idade = models.IntegerField()
    cpf = models.CharField(max_length=11)
    endereco = models.CharField(max_length=50)
    telefone = models.CharField(max_length=50)
    ativo = models.BooleanField(default=True)
    data_cadastro = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.nome}'

class Turma(models.Model):
    turma = models.CharField()
    turno = models.CharField()
    professor_id = models.ForeignKey(Professor, on_delete=models.CASCADE)
    aluno_id = models.ForeignKey(Aluno, on_delete=models.CASCADE)
    ativo = models.BooleanField(default=True)
    data_cadastro = models.DateTimeField(default=timezone.now)
    observacao = models.TextField(blank=True)

    def __str__(self):
        return f'{self.turma}'
