# Car Dealership Inventory System

A production-grade Full-Stack MERN (MongoDB, Express, React, Node.js) application designed and built with strict **Test-Driven Development (TDD)** and clean multi-layered enterprise architecture.

---

## 🏗️ Architecture Overview

```
Car-Dealership-Inventory-System/
├── backend/
│   ├── src/
│   │   ├── controllers/   # Request / Response handling
│   │   ├── routes/        # Express REST routing layer
│   │   ├── middleware/    # Auth, RBAC, Validation & Error handling
│   │   ├── models/        # Mongoose Database schemas & models
│   │   ├── services/      # Core Domain & Business Logic
│   │   ├── repository/    # Data Access Abstraction Layer
│   │   ├── tests/         # Jest & Supertest TDD Integration Test Suites
│   │   ├── config/        # Environment & Database configurations
│   │   └── utils/         # Custom Error classes & Helpers
│   ├── package.json
│   ├── jest.config.js
│   ├── .env
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI primitives
│   │   ├── pages/         # Application View pages
│   │   ├── hooks/         # Custom React hooks
│   │   ├── context/       # React Context state management
│   │   ├── services/      # Axios / API Client modules
│   │   └── layouts/       # Main, Auth & Dashboard layout wrappers
├── README.md              # Project Documentation
└── PROMPTS.md             # Mentorship & TDD Prompts Log
```

---

## 🧪 Testing (TDD)
- **Backend Testing**: Jest + Supertest + `mongodb-memory-server`
- Execute tests: `npm test` inside `backend/`

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm / pnpm
- MongoDB (or MongoDB Atlas)

### Setup & Installation
```bash
# Clone the repository
git clone https://github.com/krupal-05/Car-Dealership-Inventory-System.git

# Install Backend Dependencies
cd backend
npm install

# Run Tests
npm test

# Start Development Server
npm run dev
```
