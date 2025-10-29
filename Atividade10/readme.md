# Atividade 10 — Calculadora de IMC

Calculadora de Índice de Massa Corporal (IMC) desenvolvida para a disciplina Programação para Web (PWEB). Permite calcular o IMC a partir da altura (m) e peso (kg), exibindo a classificação conforme a tabela da atividade.

## Estrutura do projeto

- `index.html` — interface com formulário, botão e área de resultado.
- `css/style.css` — estilos da página.
- `js/app.js` — lógica de conversão, cálculo, validação e exibição dos resultados.

Caminho no repositório:

- Atividade10/index.html
- Atividade10/css/style.css
- Atividade10/js/app.js

## Funcionalidades

- Entrada por formulário (campos Altura e Peso) e por prompts (diálogos).
- Conversão de números que aceitam vírgula ou ponto decimais.
- Validação de entradas (altura entre ~0.5 e 2.7 m; peso entre ~2 e 500 kg).
- Cálculo do IMC: peso / (altura²).
- Classificação conforme faixas:
  - < 18.5 → Magreza (Grau 0)
  - 18.5–24.9 → Normal (Grau 0)
  - 25.0–29.9 → Sobrepeso (Grau I)
  - 30.0–39.9 → Obesidade (Grau II)
  - ≥ 40.0 → Obesidade grave (Grau III)
- Resultado mostrado na página e em alert.

## Como usar

1. Abra `index.html` em um navegador com JavaScript ativado.
2. Preencha os campos "Altura (m)" e "Peso (kg)" e clique em "Calcular" — ou clique em "Usar prompts" para entrada via diálogos.
3. Veja o IMC e a classificação na seção "Resultado".

## Funções principais (em `js/app.js`)

- `toNumber(input)` — normaliza string numérica (troca vírgula por ponto).
- `calcularIMC(peso, altura)` — retorna o IMC.
- `classificarIMC(imc)` — retorna objeto `{ classe, grau }`.
- `validarEntradas(altura, peso)` — valida limites para altura e peso.
- `calcularViaFormulario()` e `calcularViaPrompts()` — fluxos de entrada e exibição.
- `mostrarResultado(imc, classe, grau)` — atualiza DOM e exibe alert.

## Observações

- Aceita entradas com vírgula (ex.: `1,70` e `68,5`).
- Mensagens de validação orientam o usuário em caso de entradas fora dos limites.
- A tabela de referência está disponível na página (detalhes).
