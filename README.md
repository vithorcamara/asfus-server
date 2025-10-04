# Backend - API Node.js + Express + Supabase

Esta é a versão atual do backend da aplicação, utilizando **Node.js**, **Express** e **Supabase**.  
O projeto segue uma arquitetura modular, com separação de responsabilidades entre **routes**, **controllers**, **services**, **middlewares** e **utils**.

---

## 🗂 Estrutura do Projeto

```explorer

backend/
│── src/
│   ├── config/              # Configurações (Supabase, scripts SQL)
│   │     ├── supabase.js
│   │     └── supabaseDDL.sql
│
│   ├── routes/              # Definição das rotas
│   │     ├── index.js        # Centraliza todas as rotas
│   │     ├── new.routes.js
│   │     ├── event.routes.js
│   │     ├── agreement.routes.js
│   │     ├── announcement.routes.js
│   │     ├── photo.routes.js
│   │     ├── associate.routes.js
│   │     └── auth.routes.js
│
│   ├── controllers/         # Lógica de entrada/saída
│   │     ├── new.controller.js
│   │     ├── event.controller.js
│   │     ├── agreement.controller.js
│   │     ├── announcement.controller.js
│   │     ├── photo.controller.js
│   │     ├── associate.controller.js
│   │     └── auth.controller.js
│
│   ├── services/            # Regras de negócio / acesso ao Supabase
│   │     ├── new.service.js
│   │     ├── event.service.js
│   │     ├── agreement.service.js
│   │     ├── announcement.service.js
│   │     ├── photo.service.js
│   │     ├── associate.service.js
│   │     └── auth.service.js
│
│   ├── middlewares/         # Middlewares
│   │     ├── authMiddleware.js
│   │     ├── errorMiddleware.js
│   │     └── loggingMiddleware.js
│
│   ├── utils/               # Funções reutilizáveis
│   │     ├── validators.js
│   │     ├── format.js
│   │     ├── token.js
│   │     └── constants.js
│
│   └── app.js               # Configuração do Express
│
├── .env                     # Variáveis de ambiente
├── package.json
└── server.js                # Ponto de entrada do servidor

````

---

## ⚡ Requisitos

- Node.js >= 18
- NPM ou Yarn
- Conta Supabase configurada com tabela de usuários e recursos

---

## ⚙️ Instalação

```bash
# Clonar o repositório
git clone <repo-url>
cd backend

# Instalar dependências
npm install
# ou
yarn install
````

* Configure o arquivo `.env` com suas variáveis do Supabase:

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_or_service_key
PORT=3000
```

---

## 🚀 Rodando o servidor

```bash
# Inicia o servidor
node server.js
```

* O servidor será iniciado no endereço padrão: `http://localhost:3000/api`

* Rota de teste/status:

```
GET /api
Response: { "message": "API is running 🚀" }
```

---

## 🔹 Rotas principais

### Auth

* `POST /api/auth/register` → Criar usuário
* `POST /api/auth/login` → Login e retorno de token JWT

### News

* `GET /api/news` → Listar notícias
* `POST /api/news` 🔒 → Criar notícia
* `PUT /api/news/:id` 🔒 → Atualizar notícia
* `DELETE /api/news/:id` 🔒 → Deletar notícia

### Events

* `GET /api/events` → Listar todos os eventos
* `POST /api/events` 🔒 → Criar um novo evento
* `PUT /api/events/:id` 🔒 → Atualizar evento existente
* `DELETE /api/events/:id` 🔒 → Deletar evento

### Agreements

* `GET /api/agreements` → Listar todos os convênios
* `POST /api/agreements` 🔒 → Criar novo convênio
* `PUT /api/agreements/:id` 🔒 → Atualizar convênio existente
* `DELETE /api/agreements/:id` 🔒 → Deletar convênio

### Announcements

* `GET /api/announcements` → Listar todos os anúncios
* `POST /api/announcements` 🔒 → Criar novo anúncio
* `PUT /api/announcements/:id` 🔒 → Atualizar anúncio existente
* `DELETE /api/announcements/:id` 🔒 → Deletar anúncio

### Photos

* `GET /api/photos` → Listar todas as fotos
* `POST /api/photos` 🔒 → Adicionar nova foto
* `DELETE /api/photos/:id` 🔒 → Deletar foto existente

### Associates

* `GET /api/associates/pending` 🔒 → Listar todos os associados pendentes de aprovação
* `PUT /api/associates/:id/approve` 🔒 → Aprovar associado
* `POST /api/associates/:id/dependents` 🔒 → Adicionar dependente a um associado
* `PUT /api/associates/:id/dependents/:dependenteId` 🔒 → Atualizar dependente
* `DELETE /api/associates/:id/dependents/:dependenteId` 🔒 → Remover dependente

> 🔒 Rotas privadas exigem header `Authorization: Bearer <token>`

---

## 💡 Observações

* Middleware de autenticação (`authMiddleware.js`) verifica token JWT do Supabase.
* Separação clara de responsabilidades facilita manutenção e escalabilidade.
* `app.js` contém configuração do Express, registro de rotas e middleware de erro.
* `server.js` sobe o servidor.

---

## 🔧 Extensões Futuras

* Adicionar `loggingMiddleware.js` para auditoria de requisições.
* Adicionar `validators.js` e `format.js` para validação/formatação de campos.
* Criar testes unitários usando Jest ou Vitest.
* Separar rotas públicas e privadas em `routes/index.js` usando blocos de middleware.

---

## 📚 Referências

* [Express.js](https://expressjs.com/)
* [Supabase](https://supabase.com/)
* [Node.js](https://nodejs.org/)

