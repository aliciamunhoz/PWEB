"use strict";

// Utilitário para ler número com validação
function lerNumero(msg) {
  while (true) {
    const v = prompt(msg);
    if (v === null) return null; // cancelado
    const n = Number.parseFloat(String(v).replace(",", "."));
    if (!Number.isNaN(n)) return n;
    alert("Valor inválido. Digite um número.");
  }
}

// 1) Maior de três números
function maiorDeTres(a, b, c) {
  // usando reduce (slides de arrays) OU Math.max
  return [a, b, c].reduce((x, y) => (x > y ? x : y));
}

// 2) Ordenar três números em ordem crescente
function ordenarTres(a, b, c) {
  return [a, b, c].sort((x, y) => x - y); // comparator numérico
}

// 3) Verificar palíndromo (converter para MAIÚSCULAS)
function ehPalindromo(str) {
  const s = String(str).toUpperCase();
  const normalizada = s.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // remove acentos
  const limpo = normalizada.replace(/[^A-Z0-9]/g, ""); // mantém letras e números
  const invertido = limpo.split("").reverse().join("");
  return limpo.length > 0 && limpo === invertido;
}

// 4) Triângulo e tipo (equilátero/isósceles/escaleno)
function tipoTriangulo(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return "Valores inválidos.";
  // condição de existência: cada lado < soma dos outros dois
  if (a >= b + c || b >= a + c || c >= a + b) return "Não formam um triângulo.";

  if (a === b && b === c) return "Equilátero";
  if (a === b || a === c || b === c) return "Isósceles";
  return "Escaleno";
}

const $ = (sel) => document.querySelector(sel);
const saida = $("#saida");

function mostrar(msg) {
  saida.innerHTML = msg;
  console.log("[Atv9] " + msg);
  alert(msg);
}

window.addEventListener("DOMContentLoaded", () => {
  // 1) Maior de três
  $("#btn-maior").addEventListener("click", () => {
    const a = lerNumero("Digite o 1º número:");
    if (a === null) return;
    const b = lerNumero("Digite o 2º número:");
    if (b === null) return;
    const c = lerNumero("Digite o 3º número:");
    if (c === null) return;

    const r = maiorDeTres(a, b, c);
    mostrar(`Maior de (${a}, ${b}, ${c}) = ${r}`);
  });

  // 2) Ordenar três
  $("#btn-ordenar").addEventListener("click", () => {
    const a = lerNumero("Digite o 1º número:");
    if (a === null) return;
    const b = lerNumero("Digite o 2º número:");
    if (b === null) return;
    const c = lerNumero("Digite o 3º número:");
    if (c === null) return;

    const ordenado = ordenarTres(a, b, c);
    mostrar(`Ordem crescente: ${ordenado.join(" < ")}`);
  });

  // 3) Palíndromo
  $("#btn-palindromo").addEventListener("click", () => {
    const txt = prompt("Digite um texto para verificar palíndromo:");
    if (txt === null) return;
    const ok = ehPalindromo(txt);
    mostrar(`"${txt}" ${ok ? "É" : "NÃO é"} palíndromo.`);
  });

  // 4) Triângulo
  $("#btn-triangulo").addEventListener("click", () => {
    const a = lerNumero("Lado A:");
    if (a === null) return;
    const b = lerNumero("Lado B:");
    if (b === null) return;
    const c = lerNumero("Lado C:");
    if (c === null) return;

    const tipo = tipoTriangulo(a, b, c);
    mostrar(`Lados (${a}, ${b}, ${c}) → ${tipo}`);
  });
});
