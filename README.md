# 🛒 Smart Multi-Vendor E-Commerce Platform

A **cloud-native, microservices-based, multi-vendor e-commerce platform** designed to demonstrate **Solution Architect–level system design**, scalability, and DevOps maturity.

This repository is intentionally structured as a **monorepo** to simplify local development while maintaining clear service boundaries.

---

## ✨ Project Goals

- Demonstrate real-world **microservices architecture**
- Showcase **scalability, fault isolation, and event-driven design**
- Support **web, mobile, and backend** in a single cohesive system
- Be **interview-ready** for Senior / Solution Architect roles
- Stay **cost-aware** and developer-friendly

---

## 🧰 Technology Stack

### Frontend
- **Next.js** (React)
- **Vercel** (hosting & edge delivery)

### Mobile
- **Flutter**
- Android & iOS builds via GitHub Actions

### Backend
- **Bun** (Node-compatible runtime)
- REST + async event-driven services
- Dockerized microservices

### Databases & Storage
- **PostgreSQL (RDS)**
- **Redis**
- **Amazon S3** (blob storage)

### Messaging
- **AWS SNS + SQS**
- Dead-letter queues (DLQ)

### Infrastructure & DevOps
- **Docker**
- **Kubernetes (local / EKS)**
- **AWS ECS (Fargate)**
- **Terraform / AWS CDK**
- **GitHub Actions (CI/CD)**

---

## 📁 Monorepo Structure

```
.
├── apps
│   ├── web/                 # Next.js frontend
│   ├── mobile/              # Flutter app
│   └── admin/               # Admin dashboard (optional)
│
├── services                 # Backend microservices (Bun)
│   ├── auth-service/
│   ├── catalog-service/
│   ├── cart-service/
│   ├── order-service/
│   ├── payment-service/
│   ├── inventory-service/
│   ├── notification-service/
│   ├── socket-service/
│   └── analytics-service/
│
├── packages
│   ├── shared-types/        # DTOs, event schemas
│   ├── config/              # Shared configs
│   └── utils/               # Common utilities
│
├── infra
│   ├── terraform/           # Infrastructure as Code
│   ├── kubernetes/          # K8s manifests
│   └── scripts/             # Infra automation
│
├── ci
│   ├── github-actions/      # Workflow templates
│
├── docs
│   ├── ARCHITECTURE.md
│   ├── DECISIONS.md
│   └── diagrams/
│
├── docker-compose.yml       # Local development
└── README.md
```

---

## 🚀 Running Locally

### Prerequisites
- Docker & Docker Compose
- Bun
- Node.js (for frontend tooling)
- Flutter SDK
- PostgreSQL & Redis (via Docker)

---

### 1️⃣ Start Backend Services

```bash
docker-compose up -d
```

This starts:
- All backend services
- PostgreSQL
- Redis
- Local SNS/SQS simulation (if configured)

---

### 2️⃣ Run Frontend

```bash
cd apps/web
bun install
bun run dev
```

Frontend runs at: `http://localhost:3000`

---

### 3️⃣ Run Mobile App

```bash
cd apps/mobile
flutter pub get
flutter run
```

---

## 🔄 CI/CD Pipeline (GitHub Actions)

### Backend Services
Each service has an independent pipeline:

1. Code checkout
2. Tests
3. Docker image build
4. Push to container registry
5. Deploy to ECS or Kubernetes

Triggered on:
- Push to `main`
- Version tags

---

### Frontend (Web)
- Deployed automatically via **Vercel**
- Preview environments for pull requests
- Production deployment on `main` merge

---

### Mobile (Flutter)

GitHub Actions pipeline:
- Build Android APK / AAB
- Build iOS IPA
- Versioning via Git tags
- Artifacts uploaded to GitHub Releases

Optional:
- Firebase App Distribution
- TestFlight integration

---

## 🔐 Security Considerations

### Application Security
- JWT-based authentication
- Short-lived access tokens
- Role-based authorization
- Input validation at API boundaries

### Infrastructure Security
- IAM least-privilege policies
- Secrets stored in AWS Secrets Manager
- No secrets in code or CI
- Network isolation (VPC, security groups)

### Data Security
- Encrypted data at rest (RDS, S3)
- Encrypted data in transit (HTTPS)
- Audit logging for sensitive operations

---

## 📊 Observability & Reliability

- Centralized logging
- Dead-letter queues for failed events
- Retry with exponential backoff
- Health checks & readiness probes
- Horizontal auto-scaling

---

## 💰 Cost Awareness

- Managed services preferred
- Serverless for burst workloads
- Auto-scaling down to zero where possible
- Local-first development
- Production paths documented, not always active

---

## 🧠 Architectural Highlights

- Event-driven microservices
- Orchestrated Saga pattern
- Database-per-service
- Application-level sharding
- Cloud-agnostic deployment
- Optional Kubernetes support

---

## 🔮 Future Scope

- API Gateway with rate limiting
- GraphQL federation
- Search service (OpenSearch)
- Recommendation engine
- Multi-region deployment
- Canary & blue-green deployments
- Service mesh (optional)

---

## 🎯 Intended Audience

This project is designed for:
- Senior Backend Engineers
- Solution Architects
- Platform / Cloud Engineers
- Technical interviews & portfolios

---

## 📌 Final Note

This repository prioritizes **architectural clarity and decision-making** over raw feature count.

It is built to start simple, scale intentionally, and evolve realistically — just like real production systems.
