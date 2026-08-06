 const btnTema = document.querySelector(".btn-tema-escuro");

btnTema.addEventListener("click", mudarTema);

function mudarTema() {
  document.body.classList.toggle("tema-escuro");

  if (document.body.classList.contains("tema-escuro")) {
    btnTema.textContent = "☀️ Tema Claro";
  } else {
    btnTema.textContent = "🌙 Tema Escuro";
  }
}