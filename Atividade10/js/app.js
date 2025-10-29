"use strict";

// Converte string "1,75" → 1.75
function toNumber(input) {
  return Number.parseFloat(String(input).replace(",", "."));
}

// Calcula IMC: peso(kg) / [altura(m)]²
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

// Classifica IMC conforme tabela da atividade
function classificarIMC(imc) {
  if (imc < 18.5) return { classe: "Magreza", grau: "0" };
  if (imc < 25) return { classe: "Normal", grau: "0" };
  if (imc < 30) return { classe: "Sobrepeso", grau: "I" };
  if (imc < 40) return { classe: "Obesidade", grau: "II" };
  return { classe: "Obesidade grave", grau: "III" };
}

/* ====== Fluxo (DOM + diálogos) ====== */
const $ = (sel) => document.querySelector(sel);
const saida = $("#saida");

function mostrarResultado(imc, classe, grau) {
  const msg = `IMC: <strong>${imc.toFixed(
    2
  )}</strong> — <strong>${classe}</strong> (Grau ${grau})`;
  saida.innerHTML = msg;
  alert(msg.replace(/<[^>]+>/g, ""));
}

function validarEntradas(altura, peso) {
  if (!(altura > 0.5 && altura < 2.7)) {
    alert("Altura inválida. Informe em metros (ex.: 1,70).");
    return false;
  }
  if (!(peso > 2 && peso < 500)) {
    alert("Peso inválido. Informe em kg (ex.: 68,5).");
    return false;
  }
  return true;
}

function calcularViaFormulario() {
  const altura = toNumber($("#inp-altura").value);
  const peso = toNumber($("#inp-peso").value);
  if (!validarEntradas(altura, peso)) return;

  const imc = calcularIMC(peso, altura);
  const { classe, grau } = classificarIMC(imc);
  mostrarResultado(imc, classe, grau);
}

function calcularViaPrompts() {
  const h = prompt("Altura (m) — ex.: 1,70:");
  if (h === null) return;
  const p = prompt("Peso (kg) — ex.: 68,5:");
  if (p === null) return;

  const altura = toNumber(h);
  const peso = toNumber(p);
  if (!validarEntradas(altura, peso)) return;

  const imc = calcularIMC(peso, altura);
  const { classe, grau } = classificarIMC(imc);
  mostrarResultado(imc, classe, grau);
}

window.addEventListener("DOMContentLoaded", () => {
  $("#btn-calcular").addEventListener("click", calcularViaFormulario);
  $("#btn-prompts").addEventListener("click", calcularViaPrompts);
});
