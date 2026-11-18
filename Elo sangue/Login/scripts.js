const campoSenha = document.querySelector("#senha");
const botaoSenha = document.querySelector("#botao-senha");
const riscoOlho = document.querySelector("#risco-olho");
const formulario = document.querySelector("#form-login");
const mensagem = document.querySelector("#mensagem");

// Mostra ou oculta a senha.
botaoSenha.addEventListener("click", () => {
  const mostrarSenha = campoSenha.type === "password";

  campoSenha.type = mostrarSenha ? "text" : "password";

  botaoSenha.setAttribute(
    "aria-label",
    mostrarSenha ? "Ocultar senha" : "Mostrar senha"
  );

  botaoSenha.setAttribute("aria-pressed", String(mostrarSenha));

  riscoOlho.style.display = mostrarSenha ? "none" : "";
});

// Demonstração: impede o envio até existir um backend.
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  mensagem.textContent =
    "Tela de demonstração. A autenticação ainda não foi conectada.";
});