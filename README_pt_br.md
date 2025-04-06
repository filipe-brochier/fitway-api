# 💪 FitWay API

**FitWay** é uma API RESTful para gerenciamento de academias e check-ins, desenvolvida com **Node.js**, **Fastify**, **Prisma**, e **TypeScript**. Este projeto foi inspirado no modelo Gympass e criado originalmente como parte do **Ignite da Rocketseat** (trilha Node.js), mas foi **expandido com novas funcionalidades** além das propostas originais.

📄 [Read this README.md in english](./README.md)

## 🚀 Tecnologias

- Node.js
- TypeScript
- Fastify
- Prisma ORM
- PostgreSQL
- Vitest (testes unitários e E2E)
- JWT (autenticação)
- GitHub Actions (CI/CD)

---

## 📦 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/fitway-api.git
cd fitway-api
```

### 2. Instale as dependências

```bash
npm ci
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` com o seguinte conteúdo:

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/fitwayapi?schema=public"
JWT_SECRET="sua_chave_secreta"
```

> Você pode usar o banco local via Docker:  
> `docker-compose up -d`

### 4. Rode as migrations

```bash
npx prisma migrate dev
```

### 5. Rode o servidor

```bash
npm run dev
```

---

## ✅ Funcionalidades

- Cadastro e autenticação de usuários
- Perfil do usuário
- Cadastro e busca de academias (por nome ou localização)
- Check-ins geolocalizados
- Histórico e métrica de check-ins
- Validação de check-ins por administradores

### ✨ Funcionalidades adicionais implementadas por mim

- [ ] Sistema de recompensas por frequência (em andamento)
- [x] Testes automatizados com Vitest
- [x] Integração contínua com GitHub Actions (unitários + E2E)

---

## 🧪 Testes

Rodar os testes unitários:

```bash
npm run test
```

Rodar os testes end-to-end:

```bash
npm run test:e2e
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 📢 Disclaimer

Este projeto foi desenvolvido originalmente como parte do **Ignite da Rocketseat (Node.js)**.  
No entanto, **foram adicionadas diversas melhorias e funcionalidades extras** com o objetivo de praticar e consolidar conhecimentos sobre desenvolvimento backend, testes, banco de dados, autenticação e CI/CD.

---

## ✍️ Autor

Feito com 💜 por Filipe Brochier
