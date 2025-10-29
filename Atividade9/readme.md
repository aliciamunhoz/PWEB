# Atividade 9 — Funções em JavaScript

Página de exercícios sobre funções em JavaScript. Implementa quatro funcionalidades que interagem com o usuário via prompt/alert e exibem resultados no DOM e no console.

## Estrutura do projeto

- index.html — interface principal e botões para executar os testes.
- css/style.css — estilos da página.
- js/app.js — implementações das funções e lógica de interação.

Caminhos:

- Atividade9/index.html
- Atividade9/css/style.css
- Atividade9/js/app.js

## Funções implementadas

1. Maior de três números

   - Função: maiorDeTres(a, b, c)
   - Entrada: três números
   - Saída: maior valor

2. Ordenar três números

   - Função: ordenarTres(a, b, c)
   - Entrada: três números
   - Saída: array com os números em ordem crescente

3. Verificar palíndromo

   - Função: ehPalindromo(str)
   - Entrada: string (texto)
   - Tratamento: remove acentuação e caracteres não alfanuméricos, ignora caixa
   - Saída: booleano indicando se é palíndromo

4. Tipo de triângulo
   - Função: tipoTriangulo(a, b, c)
   - Entrada: três lados (números)
   - Valida existência do triângulo e retorna: Equilátero, Isósceles, Escaleno ou mensagens de erro

## Como usar

1. Abra `index.html` em um navegador com JavaScript ativado.
2. Clique em um dos botões para executar a função correspondente.
3. Informe os valores solicitados nos prompts.
4. O resultado será exibido em alerta, mostrado na seção "Resultado" e registrado no console.

## Observações técnicas

- Entrada numérica aceita ponto ou vírgula como separador decimal.
- Funções estão em `js/app.js` e são reutilizáveis para testes adicionais.
- Saída visível em `#saida` facilita verificação sem depender só de alert.
