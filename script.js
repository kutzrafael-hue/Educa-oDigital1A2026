// Seleciona o botão de alterar tema
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

// Adiciona o evento de clique ao botão
btnTemaEscuro.addEventListener("click", mudaTema);

// Função que altera a classe no body
function mudaTema() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}

// Lógica para os botões de reação dos artigos
const botoesReacao = document.querySelectorAll("article button");

botoesReacao.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");
        if (!texto) return;

        let contador = parseInt(texto.textContent);

        if (!curtiu) {
            texto.textContent = contador + 1;
            curtiu = true;
        } else {
            texto.textContent = contador - 1;
            curtiu = false;
        }
    });
});