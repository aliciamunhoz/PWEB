"use strict";

const IMG = {
  FECHADA:
    "https://images.unsplash.com/photo-1520695410015-940a8b0a72a0?q=80&w=1200&auto=format&fit=crop",
  ABERTA:
    "https://images.unsplash.com/photo-1554189097-ffe88e998a2b?q=80&w=1200&auto=format&fit=crop",
  QUEBRADA:
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c55?q=80&w=1200&auto=format&fit=crop",
};

const $ = (sel) => document.querySelector(sel);
const img = $("#janela");
const titulo = $("#titulo");
const legenda = $("#legenda");

let estado = "FECHADA";

function setEstado(novo) {
  estado = novo;
  img.src = IMG[novo];
  if (novo === "FECHADA") {
    img.alt = "Janela fechada";
    legenda.textContent = "Janela Fechada";
    titulo.textContent = "Abra a Janela";
  } else if (novo === "ABERTA") {
    img.alt = "Janela aberta";
    legenda.textContent = "Janela Aberta";
    titulo.textContent = "Janela Aberta";
  } else {
    img.alt = "Janela quebrada";
    legenda.textContent = "Janela Quebrada";
    titulo.textContent = "Janela Quebrada";
  }
}

img.addEventListener("mouseover", () => {
  if (estado !== "QUEBRADA") setEstado("ABERTA");
});
img.addEventListener("mouseout", () => {
  if (estado !== "QUEBRADA") setEstado("FECHADA");
});
img.addEventListener("click", () => {
  setEstado("QUEBRADA");
});

img.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  if (k === "enter" || k === " ") {
    e.preventDefault();
    setEstado("QUEBRADA");
  }
});

["ABERTA", "QUEBRADA"].forEach((k) => {
  const i = new Image();
  i.src = IMG[k];
});
