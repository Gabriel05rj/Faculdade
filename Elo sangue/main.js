const botaoDetalhes = document.getElementById("verDetalhes");
const modalDetalhes = document.getElementById("modalDetalhes");

botaoDetalhes.addEventListener("click", function () {
    modalDetalhes.showModal();
});

const botaoMapa = document.getElementById("verMapa");

botaoMapa.addEventListener("click", function () {
    const endereco = "Rua Frei Caneca, 8, Centro, Rio de Janeiro - RJ";

    const url = "https://www.google.com/maps/search/?api=1&query="
        + encodeURIComponent(endereco);

    window.open(url, "_blank");
});