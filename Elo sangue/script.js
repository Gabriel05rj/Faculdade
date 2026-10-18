const form = document.getElementById('FormCadastro');
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const campoSenha = document.getElementById('campoSenha');
const confirmarSenha = document.getElementById('confirmarSenha');
const btnOlho = document.getElementById('btnOlho');
const btnOlhoConfirmar = document.getElementById('btnOlhoConfirmar');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    let formularioValido = true;

    //Validar nome
    if(nome.value.trim() == ""){
        mostrarErro('erroNome', 'O campo nome não pode estar em branco')
        formularioValido = false;
    }else{
        esconderErro('erroNome');
    }

    if(sobrenome.value.trim() === ""){
        mostrarErro('erroSobrenome', 'O campo sobrenome não pode estar em branco');
        formularioValido = false;
    }else{
        esconderErro('erroSobrenome');
    }

    //validar email
    if(!email.value.includes('@') || !email.value.includes('.')){
        mostrarErro('erroEmail', 'O campo email não pode estar em branco')
        formularioValido = false;
    }else{
        esconderErro('erroEmail');
    }

    //validar telefone
    if(telefone.value.trim() === ""){
        mostrarErro('erroTelefone', 'O campo telefone não pode estar em branco')
        formularioValido = false;
    }else if(telefone.value.replace(/\D/g,'').length < 10){
        mostrarErro('erroTelefone', 'Informe um telefone válido com DDD.')
        formularioValido = false;
    }else{
        esconderErro('erroTelefone');
    }

    //validar senha
    if(campoSenha.value.trim() == ""){
        mostrarErro('erroSenha', 'O campo senha não pode estar em branco')
        formularioValido = false;
    }else if(senha.value.length<6){
        mostrarErro('erroSenha','A senha deve ter pelo menos 6 caracteres')
        formularioValido = false
    }else{
        esconderErro('erroSenha');
    }

     if (confirmarSenha.value.trim() === "") {
        mostrarErro('erroConfirmarSenha', 'Por favor, confirme sua senha.');
        formularioValido = false;
    } else if (campoSenha.value !== confirmarSenha.value) {
        mostrarErro('erroConfirmarSenha', 'As senhas não coincidem.');
        formularioValido = false;
    } else {
        esconderErro('erroConfirmarSenha');
    }

    if(formularioValido){
        alert('Cadastro realizado com sucesso');
        form.reset();
    }
});

function mostrarErro(idElemento, mensagem){
    const spanErro = document.getElementById(idElemento);
    spanErro.textContent = mensagem;
    spanErro.classList.remove('hidden');
    spanErro.style.display = 'block';
}

function esconderErro(idElemento){
    const spanErro = document.getElementById(idElemento);
    spanErro.classList.add('hidden');
    spanErro.style.display = 'none';
}

btnOlho.addEventListener('click', () => {
    if (campoSenha.type === 'password') {
        campoSenha.type = 'text';
        btnOlho.textContent = '🔓'; 
    } else {
        campoSenha.type = 'password';
        btnOlho.textContent = '👁';
    }
});

btnOlhoConfirmar.addEventListener('click', () => {
    if (confirmarSenha.type === 'password') {
        confirmarSenha.type = 'text';
        btnOlhoConfirmar.textContent = '🔓';
    } else {
        confirmarSenha.type = 'password';
        btnOlhoConfirmar.textContent = '👁';
    }
});