"use strict";

const funcionario1 = {
  matricula: "F001",
  nome: "Ana Souza",
  funcao: "Analista de Sistemas",
};

const funcionario2 = new Object();
funcionario2.matricula = "F002";
funcionario2.nome = "Bruno Lima";
funcionario2.funcao = "Desenvolvedor Back-end";

class Funcionario {
  constructor(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
  }
}
const funcionario3 = new Funcionario("F003", "Carla Nunes", "DBA");

const funcionarios = [funcionario1, funcionario2, funcionario3];

console.table(funcionarios);

document.getElementById("saida").innerHTML = `
  <strong>Funcionários criados:</strong>
  <ul>
    ${funcionarios
      .map(
        (f) =>
          `<li>Matrícula: <b>${f.matricula}</b> — Nome: <b>${f.nome}</b> — Função: <b>${f.funcao}</b></li>`
      )
      .join("")}
  </ul>
  <p style="margin-top:.5rem;color:#555">Confira os detalhes no console com <code>console.table(funcionarios)</code>.</p>
`;
