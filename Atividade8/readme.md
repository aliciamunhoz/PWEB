# Atividade 8 — Pesquisa de Opinião

Página interativa que coleta 45 respostas via diálogos (prompt/alert) e apresenta estatísticas básicas: média de idades, maior/menor idade, quantidade de opiniões “péssimo”, percentual de “ótimo ou bom” e contagem por sexo.

## Estrutura do projeto

- `index.html` — interface e botão para iniciar a coleta.
- `css/style.css` — estilos da página.
- `js/app.js` — lógica da coleta, validação e cálculo das estatísticas.

Caminhos no repositório:

- Atividade8/index.html
- Atividade8/css/style.css
- Atividade8/js/app.js

## Funcionamento

1. Clique em "Iniciar coleta".
2. Serão solicitados, para cada pessoa (45 no total):
   - Idade (0–120)
   - Sexo (`f`, `m` ou `o`)
   - Opinião (1=péssimo, 2=regular, 3=bom, 4=ótimo)
3. Os valores são validados. Se o usuário cancelar em qualquer prompt, a coleta interrompe.
4. Ao final são exibidos:
   - Média das idades
   - Pessoa mais velha e mais nova
   - Quantidade de respostas “péssimo”
   - Percentual de respostas “ótimo ou bom”
   - Contagem por sexo (F / M / O)
5. Resultados também são exibidos na seção “Resultado” da página.

Observação: o total de respostas é controlado pela constante `TOTAL_PESSOAS` em `js/app.js`.

## Como executar

1. Abra `index.html` em um navegador com JavaScript ativado.
2. Clique em "Iniciar coleta" e responda os prompts.

## Notas de implementação

- Validação robusta para idade, sexo e opinião.
- Usa prompts/alerts (interface baseada em diálogos) para entrada/saída.
- Atualiza a interface DOM com os resultados (elementos dentro da seção `#resultado`).
