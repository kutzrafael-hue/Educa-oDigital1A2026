// Seleciona apenas os botões de reação dentro dos artigos
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

// Lógica para alternar o tema escuro/claro
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

if (btnTemaEscuro) {
    btnTemaEscuro.addEventListener("click", function () {
        document.body.classList.toggle("tema-escuro");
    });
}