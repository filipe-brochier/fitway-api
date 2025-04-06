# 💪 FitWay API

**FitWay** is a RESTful API for gym and check-in management, built with **Node.js**, **Fastify**, **Prisma**, and **TypeScript**.  
Originally developed as part of the **Rocketseat Ignite (Node.js track)**, this project has been extended with **new features** for practice and learning purposes.

📄 [Leia esta documentação em português 🇧🇷](./README_pt_br.md)

## 🚀 Technologies

- Node.js
- TypeScript
- Fastify
- Prisma ORM
- PostgreSQL
- Vitest (unit and E2E testing)
- JWT (authentication)
- GitHub Actions (CI/CD)

---

## 📦 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/your-username/fitway-api.git
cd fitway-api
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Create your `.env` file

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/fitwayapi?schema=public"
JWT_SECRET="your_secret_key"
```

> You can start a local Postgres container with:  
> `docker-compose up -d`

### 4. Run the migrations

```bash
npx prisma migrate dev
```

### 5. Start the server

```bash
npm run dev
```

---

## ✅ Features

- User registration and authentication
- View authenticated user profile
- Gym search by name or location
- Geolocated check-ins
- Check-in history and metrics
- Admin-only gym registration and check-in validation

### ✨ Additional features implemented

- [ ] Reward system based on attendance streaks (in progress)
- [x] Automated tests with Vitest
- [x] CI integration with GitHub Actions (unit + e2e)

---

## 🧪 Testing

Run unit tests:

```bash
npm run test
```

Run end-to-end tests:

```bash
npm run test:e2e
```

---

## 📢 Disclaimer

This project was originally created as part of **Rocketseat's Ignite (Node.js track)**.  
However, several improvements and additional features were added to practice backend development, testing, database integration, authentication, and CI/CD pipelines.

---

## ✍️ Author

Made with 💜 by Filipe Brochier
