const form = document.getElementById('FormCadastro');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const campoSenha = document.getElementById('senha');
const btnolho = document.getElementById('btnolho');

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

    //validar email
    if(!email.value.includes('@') || !email.value.includes('.')){
        mostrarErro('erroEmail', 'O campo email não pode estar em branco')
        formularioValido = false;
    }else{
        esconderErro('erroEmail');
    }

    //validar telefone
    if(telefone.value.length<12){
        mostrarErro('erroTelefone', 'O campo telefone não pode estar em branco')
        formularioValido = false;
    }else{
        esconderErro('erroTelefone');
    }

    //validar senha
    if(senha.value.length<6){
        mostrarErro('erroSenha','A senha deve ter pelo menos 6 caracteres')
        formularioValido = false
    }else if(senha.value.trim() == ""){
        mostrarErro('erroSenha', 'O campo senha não pode estar em branco')
        formularioValido = false;
    }else{
        esconderErro('erroSenha');
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

btnolho.addEventListener('click',() =>{

    if(campoSenha.type === 'password'){
        campoSenha.type = 'text';
        btnolho.textContent = '🔓';
    }else{
        campoSenha.type = 'password';
        btnolho.textContent = '👁';
    }
});