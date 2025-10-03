"use strict";

const JOGADAS = ["pedra", "papel", "tesoura"];

const jogadaComputador = () => {
  const r = Math.random(); // [0,1)
  if (r < 1 / 3) return "pedra";
  if (r < 2 / 3) return "papel";
  return "tesoura";
};

function lerJogadaUsuario() {
  while (true) {
    const inp = prompt('Escolha "pedra", "papel" ou "tesoura":');
    if (inp === null) return null; // usuário cancelou
    const v = String(inp).trim().toLowerCase();
    if (JOGADAS.includes(v)) return v;
    alert(
      "Valor inválido. Tente novamente digitando: pedra, papel ou tesoura."
    );
  }
}

function decidirVencedor(usuario, computador) {
  if (usuario === computador) return "Empate.";
  if (
    (usuario === "pedra" && computador === "tesoura") ||
    (usuario === "tesoura" && computador === "papel") ||
    (usuario === "papel" && computador === "pedra")
  )
    return "Você venceu!";

  return "Computador venceu!";
}

function jogar() {
  alert("Bem-vindo(a) ao Pedra, Papel ou Tesoura!");
  do {
    const usuario = lerJogadaUsuario();
    if (usuario === null) break;

    const computador = jogadaComputador();

    const resultado = decidirVencedor(usuario, computador);

    alert(
      "Sua escolha: " +
        usuario +
        "\nComputador: " +
        computador +
        "\n\nResultado: " +
        resultado
    );
  } while (confirm("Jogar novamente?"));

  alert("Encerrado. Obrigado por jogar!");
}

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-jogar");
  btn.addEventListener("click", jogar);
});
