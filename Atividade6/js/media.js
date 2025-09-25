"use strict";

const toNumber = (str) => Number.parseFloat(String(str).replace(",", "."));

const lerNota = (rotulo) => {
  while (true) {
    const entrada = prompt(`Digite a ${rotulo} (0 a 10):`);
    if (entrada === null) return null; // cancelado
    const n = toNumber(entrada);
    if (!Number.isNaN(n) && n >= 0 && n <= 10) return n;
    alert("Valor inválido. Informe um número entre 0 e 10.");
  }
};

window.addEventListener("DOMContentLoaded", () => {
  alert("Vamos calcular a média aritmética de um(a) aluno(a).");

  do {
    const nome = prompt("Nome do(a) aluno(a):");
    if (nome === null) break;

    const n1 = lerNota("1ª nota");
    if (n1 === null) break;
    const n2 = lerNota("2ª nota");
    if (n2 === null) break;
    const n3 = lerNota("3ª nota");
    if (n3 === null) break;
    const n4 = lerNota("4ª nota");
    if (n4 === null) break;

    const media = (n1 + n2 + n3 + n4) / 4;

    alert(
      `Aluno(a): ${nome}\n` +
        `Notas: ${n1.toFixed(2)}, ${n2.toFixed(2)}, ${n3.toFixed(
          2
        )}, ${n4.toFixed(2)}\n` +
        `Média aritmética: ${media.toFixed(2)}`
    );
  } while (confirm("Deseja calcular a média de outro(a) aluno(a)?"));

  alert("Encerrado. Obrigado!");
});
