# Kanban Board - Sistema de Gerenciamento de Projetos

Um sistema completo de gerenciamento de projetos estilo Kanban desenvolvido com Next.js 16, TypeScript, Drizzle ORM e PostgreSQL.

## 📋 Funcionalidades

- **Autenticação de Usuários**: Sistema completo de cadastro e login usando Better Auth
- **Gerenciamento de Quadros**: Crie, edite e exclua quadros Kanban
- **Colunas Personalizáveis**: Adicione, renomeie e organize colunas em cada quadro
- **Sistema de Cards**: Crie cards com título, descrição e níveis de prioridade
- **Drag and Drop**: Reorganize cards e colunas através de arrastar e soltar
- **Compartilhamento**: Compartilhe quadros com outros usuários via e-mail
- **Controle de Acesso**: Proprietários podem gerenciar permissões de acesso
- **Interface Responsiva**: Design moderno e adaptável para todos os dispositivos

## 🚀 Tecnologias Utilizadas

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Banco de Dados**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Autenticação**: [Better Auth](https://www.better-auth.com/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Validação**: [Zod](https://zod.dev/)
- **Formulários**: [React Hook Form](https://react-hook-form.com/)
- **Drag and Drop**: [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)

## 📦 Estrutura do Projeto

```
├── app/                    # App Router do Next.js
│   ├── (auth)/            # Rotas de autenticação
│   ├── api/               # API Routes
│   ├── boards/            # Rotas dos quadros
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI reutilizáveis
│   ├── board-view.tsx    # Visualização do quadro
│   ├── boards-list.tsx   # Lista de quadros
│   └── kanban-column.tsx # Componente de coluna
├── lib/                   # Utilitários e configurações
│   ├── db/               # Configuração do banco de dados
│   ├── auth.ts           # Configuração de autenticação
│   └── utils.ts          # Funções auxiliares
├── types/                 # Definições de tipos TypeScript
├── drizzle/              # Migrações do banco de dados
└── public/               # Arquivos estáticos
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 20.x ou superior
- PostgreSQL 17.x
- npm, yarn, pnpm ou bun

### Passo a Passo

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd ProjetoFinal
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/next"
BETTER_AUTH_SECRET="sua-chave-secreta-aqui"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. **Inicie o banco de dados (usando Docker)**

```bash
docker-compose up -d
```

5. **Execute as migrações do banco de dados**

```bash
npm run db:migrate
```

6. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📊 Schema do Banco de Dados

O projeto utiliza as seguintes tabelas principais:

- **user**: Informações dos usuários
- **session**: Sessões de autenticação
- **boards**: Quadros Kanban
- **board_access**: Controle de acesso aos quadros
- **columns**: Colunas dos quadros
- **cards**: Cards dentro das colunas

Para visualizar o schema completo, veja `lib/db/schema.ts`.

## 🎯 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa o linter
npm run db:generate  # Gera migrações do Drizzle
npm run db:migrate   # Executa migrações pendentes
npm run db:studio    # Abre Drizzle Studio (visualizador de BD)
```

## 🔐 Autenticação

O sistema utiliza [Better Auth](https://www.better-auth.com/) com as seguintes funcionalidades:

- Registro de usuários com email e senha
- Login com validação
- Sessões persistentes (7 dias)
- Verificação de email (configurável)

Configuração em `lib/auth.ts` e `lib/auth-client.ts`.

## 🎨 Componentes UI

Os componentes de interface são baseados em [shadcn/ui](https://ui.shadcn.com/), incluindo:

- `Dialog`: Modais e diálogos
- `Button`: Botões estilizados
- `Input`: Campos de entrada
- `Card`: Containers de conteúdo
- `Select`: Seleção dropdown
- `Badge`: Badges de prioridade
- `Label`: Rótulos de formulário

## 📱 Rotas da Aplicação

- `/` - Redireciona para `/boards`
- `/sign-in` - Página de login
- `/sign-up` - Página de cadastro
- `/boards` - Lista de quadros do usuário
- `/boards/[boardId]` - Visualização e edição de um quadro específico

## 🔄 API Routes

- `POST /api/boards` - Criar novo quadro
- `GET /api/boards` - Listar quadros do usuário
- `POST /api/boards/[boardId]/columns` - Adicionar coluna
- `PATCH /api/columns/[columnId]` - Renomear coluna
- `POST /api/columns/[columnId]/cards` - Adicionar card
- `PATCH /api/cards/[cardId]` - Atualizar card
- `POST /api/boards/[boardId]/share` - Compartilhar quadro
- `DELETE /api/boards/[boardId]/share/[userId]` - Remover acesso

## 📚 Saiba Mais

Para aprender mais sobre as tecnologias utilizadas:

- [Next.js Documentation](https://nextjs.org/docs) - funcionalidades e API do Next.js
- [Learn Next.js](https://nextjs.org/learn) - tutorial interativo de Next.js
- [Drizzle ORM Docs](https://orm.drizzle.team/docs/overview) - documentação do Drizzle ORM
- [Better Auth Docs](https://www.better-auth.com/docs) - documentação do Better Auth

## 🚀 Deploy

### Vercel

A maneira mais fácil de fazer deploy é usando a [Plataforma Vercel](https://vercel.com/new):

1. Faça push do código para um repositório Git
2. Conecte o repositório na Vercel
3. Configure as variáveis de ambiente
4. Configure o banco de dados PostgreSQL (Vercel Postgres, Neon, Supabase, etc.)
5. Deploy!

Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

## 📝 Licença

Este projeto foi desenvolvido como projeto final da disciplina de Programação Web da FATEC.

## 👥 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

Desenvolvido com ❤️ usando Next.js e TypeScript
