"use strict";

const toNumber = (str) => Number.parseFloat(String(str).replace(",", "."));

const lerNumero = (rotulo) => {
  while (true) {
    const entrada = prompt(`Digite o ${rotulo}:`);
    if (entrada === null) return null;
    const n = toNumber(entrada);
    if (!Number.isNaN(n)) return n;
    alert(
      "Valor inválido. Digite um número (use vírgula ou ponto nos decimais)."
    );
  }
};

window.addEventListener("DOMContentLoaded", () => {
  alert("Calculadora: soma, subtração, produto, divisão e resto.");

  do {
    const a = lerNumero("primeiro número");
    if (a === null) break;
    const b = lerNumero("segundo número");
    if (b === null) break;

    const soma = a + b;
    const sub = a - b;
    const prod = a * b;
    const div = b === 0 ? "indefinida (divisão por zero)" : (a / b).toFixed(4);
    const resto = b === 0 ? "indefinido (divisão por zero)" : a % b;

    alert(
      "Resultados:\n" +
        `• Soma: ${soma}\n` +
        `• Subtração (primeiro − segundo): ${sub}\n` +
        `• Produto: ${prod}\n` +
        `• Divisão (primeiro ÷ segundo): ${div}\n` +
        `• Resto (primeiro % segundo): ${resto}`
    );
  } while (confirm("Deseja calcular novamente?"));

  alert("Encerrado. Até mais!");
});
