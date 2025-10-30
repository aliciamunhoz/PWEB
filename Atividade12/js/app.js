"use strict";

const $ = (sel) => document.querySelector(sel);
const toNumber = (v) => Number.parseFloat(String(v).replace(",", "."));

function alertSafeHtml(msg) {
  alert(String(msg).replace(/<[^>]+>/g, ""));
}

function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;
}
Retangulo.prototype.area = function () {
  return this.base * this.altura;
};

function calcAreaInputs() {
  const b = toNumber($("#base").value);
  const h = toNumber($("#altura").value);
  if (!(b > 0 && h > 0)) return alert("Informe base e altura válidas (>0).");

  const r = new Retangulo(b, h);
  const a = r.area();
  $("#saidaArea").textContent = a.toFixed(2);
  alertSafeHtml(`Área do retângulo = ${a.toFixed(2)}`);
}

function calcAreaPrompts() {
  const b = toNumber(prompt("Base (x):"));
  if (!b) return;
  const h = toNumber(prompt("Altura (y):"));
  if (!h) return;

  const r = new Retangulo(b, h);
  const a = r.area();
  $("#saidaArea").textContent = a.toFixed(2);
  alertSafeHtml(`Área do retângulo = ${a.toFixed(2)}`);
}

class Conta {
  constructor(nome, banco, numero, saldo) {
    this._nome = nome;
    this._banco = banco;
    this._numero = numero;
    this._saldo = saldo;
  }
  get nome() {
    return this._nome;
  }
  set nome(v) {
    this._nome = String(v);
  }

  get banco() {
    return this._banco;
  }
  set banco(v) {
    this._banco = String(v);
  }

  get numero() {
    return this._numero;
  }
  set numero(v) {
    this._numero = String(v);
  }

  get saldo() {
    return this._saldo;
  }
  set saldo(v) {
    this._saldo = toNumber(v);
  }
}

class Corrente extends Conta {
  constructor(nome, banco, numero, saldo, saldoEspecial) {
    super(nome, banco, numero, saldo);
    this._saldoEspecial = toNumber(saldoEspecial);
  }
  get saldoEspecial() {
    return this._saldoEspecial;
  }
  set saldoEspecial(v) {
    this._saldoEspecial = toNumber(v);
  }
}

class Poupanca extends Conta {
  constructor(nome, banco, numero, saldo, juros, dataVenc) {
    super(nome, banco, numero, saldo);
    this._juros = toNumber(juros); // % a.m.
    this._dataVenc = dataVenc ? new Date(dataVenc) : null;
  }
  get juros() {
    return this._juros;
  }
  set juros(v) {
    this._juros = toNumber(v);
  }

  get dataVenc() {
    return this._dataVenc;
  }
  set dataVenc(v) {
    this._dataVenc = v ? new Date(v) : null;
  }
}

function criarCorrenteInputs() {
  const c = new Corrente(
    $("#cc-nome").value,
    $("#cc-banco").value,
    $("#cc-num").value,
    toNumber($("#cc-saldo").value),
    toNumber($("#cc-especial").value)
  );
  mostrarConta("Corrente", c);
}
function criarPoupancaInputs() {
  const p = new Poupanca(
    $("#cp-nome").value,
    $("#cp-banco").value,
    $("#cp-num").value,
    toNumber($("#cp-saldo").value),
    toNumber($("#cp-juros").value),
    $("#cp-venc").value || null
  );
  mostrarConta("Poupança", p);
}

function criarCorrentePrompts() {
  const c = new Corrente(
    prompt("Nome correntista:"),
    prompt("Banco:"),
    prompt("Nº da conta:"),
    toNumber(prompt("Saldo (R$):")),
    toNumber(prompt("Saldo especial (R$):"))
  );
  mostrarConta("Corrente", c);
}
function criarPoupancaPrompts() {
  const p = new Poupanca(
    prompt("Nome correntista:"),
    prompt("Banco:"),
    prompt("Nº da conta:"),
    toNumber(prompt("Saldo (R$):")),
    toNumber(prompt("Juros (% a.m.):")),
    prompt("Data de vencimento (AAAA-MM-DD):")
  );
  mostrarConta("Poupança", p);
}

const contasCriadas = [];
function mostrarConta(tipo, conta) {
  contasCriadas.push({ tipo, conta });

  const venc =
    conta instanceof Poupanca && conta.dataVenc
      ? conta.dataVenc.toLocaleDateString()
      : "—";

  const bloco = `
    <div class="item">
      <strong>${tipo}</strong><br>
      Nome: ${conta.nome} — Banco: ${conta.banco} — Nº: ${conta.numero}<br>
      Saldo: R$ ${conta.saldo.toFixed(2)}${
    conta instanceof Corrente
      ? ` — Saldo especial: R$ ${conta.saldoEspecial.toFixed(2)}`
      : ""
  }${
    conta instanceof Poupanca
      ? ` — Juros: ${conta.juros.toFixed(2)}% a.m. — Venc.: ${venc}`
      : ""
  }
    </div>
  `;

  const saida = $("#saidaContas");
  saida.innerHTML = saida.innerHTML === "—" ? bloco : saida.innerHTML + bloco;

  alertSafeHtml(`${tipo} criada para ${conta.nome}.`);
}

window.addEventListener("DOMContentLoaded", () => {
  $("#btn-area").addEventListener("click", calcAreaInputs);
  $("#btn-area-prompt").addEventListener("click", calcAreaPrompts);

  $("#btn-cc").addEventListener("click", criarCorrenteInputs);
  $("#btn-cc-prompt").addEventListener("click", criarCorrentePrompts);

  $("#btn-cp").addEventListener("click", criarPoupancaInputs);
  $("#btn-cp-prompt").addEventListener("click", criarPoupancaPrompts);
});
