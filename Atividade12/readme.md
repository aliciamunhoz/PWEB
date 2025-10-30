# Atividade 12 — Objetos, Função Construtora e Herança (JS)

Descrição

- Exercício para praticar diferentes formas de criar objetos em JavaScript, uso de função construtora, classe com herança, getters/setters e interação com o usuário (prompt ou inputs).

Objetivos

1. Criar uma função construtora para um Retângulo que receba base e altura e possua um método para calcular a área. Criar um objeto a partir da função e executar o método. (Não é necessário usar get/set na função construtora.)
2. Criar uma classe `Conta` com as propriedades:
   - `nomeCorrentista`
   - `banco`
   - `numeroConta`
   - `saldo`
     A partir dela, criar duas classes que estendam `Conta` usando herança:
   - `Corrente` — adiciona propriedade `saldoEspecial`
   - `Poupanca` — adiciona propriedades `juros` e `dataVencimento`
     Receber os dados via getters e setters, instanciar um objeto de cada subclasse e exibir seus dados.

Estrutura do projeto

- `index.html` — página de demonstração / inputs.
- `css/style.css` — estilos.
- `js/app.js` — implementações: função construtora do Retângulo, classes Conta/Corrente/Poupanca, leitura de dados (prompt ou inputs) e exibição dos resultados (DOM / console / alert).

Como executar

1. Abra `index.html` no navegador (duplo clique) ou rode um servidor local (recomendado):
   - No macOS, dentro da pasta `Atividade12`:
     - `python3 -m http.server`
     - Abrir `http://localhost:8000`
2. Use os inputs da página ou clique para iniciar prompts que solicitam os valores.
3. Verifique o resultado no DOM, em alerts ou no console (DevTools).

Especificações técnicas e sugestões

- Retângulo (função construtora):

  - Recebe base e altura como parâmetros.
  - Método `area()` que retorna base \* altura.
  - Exemplo mínimo: criar a instância e mostrar o resultado no console ou DOM.

- Conta e herança (classes ES6):

  - `class Conta` com construtor e getters/setters para cada propriedade.
  - `class Corrente extends Conta` adicionando `saldoEspecial`.
  - `class Poupanca extends Conta` adicionando `juros` e `dataVencimento`.
  - Instanciar cada classe, atribuir valores via setters (ou pelo construtor) e exibir todos os dados via método ou console.log.

- Entrada de dados:
  - Pode usar `prompt()` para testes rápidos.
  - Para versão mais amigável, crie um formulário em `index.html` e leia valores via inputs.
