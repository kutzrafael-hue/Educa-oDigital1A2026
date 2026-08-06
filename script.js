const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
        botoes.forEach(function (botao) {
            let curtiu = false;

    botao.addEventListener("click", botaoClicado);
            botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        let texto = botao.querySelector("span");
            function botaoClicado() {
                let texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }
});
                if (curtiu === false) {
                    texto.textContent++;
                    curtiu = true;
                } else {
                    texto.textContent--;
                    curtiu = false;
                }
            }
        });

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");
const btnTemaEscuro =document.querySelector(".btn-tema-escuro");

 btnTemaEscuro.addEventListener("click", mudaTema);
btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
function  mudaTema() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
if (corpoPagina.classList.contains("tema-escuro")) {
    corpoPagina.classList.remove("tema-escuro");
} else {
    corpoPagina.classList.add("tema-escuro");
    }
}