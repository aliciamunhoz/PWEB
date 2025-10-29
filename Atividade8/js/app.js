"use strict";

const TOTAL_PESSOAS = 45;

const $ = (sel) => document.querySelector(sel);
const show = (el) => el.removeAttribute("hidden");

const lerIdade = (i) => {
  while (true) {
    const entrada = prompt(`(${i}/${TOTAL_PESSOAS}) Idade:`);
    if (entrada === null) return null;
    const idade = Number.parseInt(String(entrada).replace(",", "."), 10);
    if (!Number.isNaN(idade) && idade >= 0 && idade <= 120) return idade;
    alert("Idade inválida. Informe um número entre 0 e 120.");
  }
};

const lerSexo = (i) => {
  while (true) {
    const entrada = prompt(`(${i}/${TOTAL_PESSOAS}) Sexo [f/m/o]:`);
    if (entrada === null) return null;
    const s = String(entrada).trim().toLowerCase();
    if (["f", "m", "o"].includes(s)) return s;
    alert('Sexo inválido. Digite "f", "m" ou "o".');
  }
};

const lerOpiniao = (i) => {
  while (true) {
    const entrada = prompt(
      `(${i}/${TOTAL_PESSOAS}) Opinião [4=ótimo, 3=bom, 2=regular, 1=péssimo]:`
    );
    if (entrada === null) return null;
    const op = Number.parseInt(String(entrada), 10);
    if ([1, 2, 3, 4].includes(op)) return op;
    alert("Opinião inválida. Informe 1, 2, 3 ou 4.");
  }
};

function iniciarColeta() {
  if (!confirm(`Iniciar a coleta de ${TOTAL_PESSOAS} respostas?`)) return;

  let somaIdades = 0;
  let maisVelha = -Infinity;
  let maisNova = Infinity;

  let qtdPessimo = 0;
  let qtdOtimoBom = 0;

  let contF = 0,
    contM = 0,
    contO = 0;

  let respostasEfetivas = 0;

  for (let i = 1; i <= TOTAL_PESSOAS; i++) {
    const idade = lerIdade(i);
    if (idade === null) break;

    const sexo = lerSexo(i);
    if (sexo === null) break;

    const opiniao = lerOpiniao(i);
    if (opiniao === null) break;

    somaIdades += idade;
    if (idade > maisVelha) maisVelha = idade;
    if (idade < maisNova) maisNova = idade;

    if (opiniao === 1) qtdPessimo++;
    if (opiniao === 3 || opiniao === 4) qtdOtimoBom++;

    if (sexo === "f") contF++;
    else if (sexo === "m") contM++;
    else contO++;

    respostasEfetivas++;
  }

  if (respostasEfetivas === 0) {
    alert("Coleta cancelada sem respostas.");
    return;
  }

  const mediaIdade = somaIdades / respostasEfetivas;
  const percOtimoBom = (qtdOtimoBom / respostasEfetivas) * 100;

  alert(
    "RESULTADOS\n" +
      `Respostas válidas: ${respostasEfetivas}\n\n` +
      `• Média das idades: ${mediaIdade.toFixed(2)}\n` +
      `• Pessoa mais velha: ${maisVelha}\n` +
      `• Pessoa mais nova: ${maisNova}\n` +
      `• Quantidade de 'péssimo' (1): ${qtdPessimo}\n` +
      `• % de 'ótimo ou bom' (3 ou 4): ${percOtimoBom.toFixed(2)}%\n` +
      `• Sexo — F: ${contF} | M: ${contM} | O: ${contO}`
  );

  $("#mediaIdade").textContent = mediaIdade.toFixed(2);
  $("#maisVelha").textContent = maisVelha;
  $("#maisNova").textContent = maisNova;
  $("#qtdPessimo").textContent = qtdPessimo;
  $("#percOtimoBom").textContent = `${percOtimoBom.toFixed(2)}%`;
  $("#contF").textContent = contF;
  $("#contM").textContent = contM;
  $("#contO").textContent = contO;

  show($("#resultado"));
}

window.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("btn-iniciar")
    .addEventListener("click", iniciarColeta);
});
