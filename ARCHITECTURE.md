# 🏗️ Architecture Overview

## Multi-Vendor E-Commerce Platform (Microservices, Cloud-Native)

------------------------------------------------------------------------

## 1. Purpose of This Document

This document describes the **architecture, design decisions, and
trade-offs** of the Multi-Vendor E-Commerce Platform.

The goal of this project is to demonstrate **solution-architect-level
thinking**, including: - Microservice boundaries - Scalability
strategies - Event-driven architecture - Data ownership and
consistency - Cloud-native deployment options - Cost-aware design

This is **not** a toy project.\
It is intentionally designed to resemble a **real-world,
production-capable system**, while remaining feasible as a portfolio
project.

------------------------------------------------------------------------

## 2. High-Level System Goals

### Functional Goals

-   Support multiple vendors selling products
-   Allow customers to browse, cart, and place orders
-   Handle payments, inventory, and notifications reliably
-   Provide real-time order status updates

### Non-Functional Goals

-   Horizontal scalability
-   Fault isolation
-   Eventual consistency where appropriate
-   Strong consistency for financial transactions
-   Cloud-agnostic, container-first design
-   Cost efficiency for low-traffic environments

------------------------------------------------------------------------

## 3. Architectural Style

The system follows a **Microservices + Event-Driven Architecture**,
guided by Domain-Driven Design (DDD) principles.

Key characteristics: - Each service owns its **data and business
logic** - Services communicate via **events**, not tight coupling -
Synchronous calls are minimized - Asynchronous messaging is preferred
for reliability and scale

------------------------------------------------------------------------

## 4. System Components Overview

### Client Applications

-   **Web Frontend** (Next.js, deployed on Vercel)
-   **Mobile App** (Flutter)
-   Clients communicate only via the API Gateway

------------------------------------------------------------------------

### Backend Services (Microservices)

Each backend service is independently deployable and scalable.

  Service                Responsibility
  ---------------------- ---------------------------------------------------
  Auth Service           Authentication, authorization, JWT handling
  Catalog Service        Products, categories, vendor catalogs (sharded)
  Cart Service           Shopping cart lifecycle (ephemeral)
  Order Service          Order creation, state machine, saga orchestration
  Payment Service        Payment processing and gateway integration
  Inventory Service      Stock management and reservations
  Notification Service   Email/SMS/push notifications
  Analytics Service      Read-only projections and metrics
  Socket Service         Real-time updates via WebSockets

------------------------------------------------------------------------

## 5. Data Ownership & Storage Strategy

### Core Principle

> **No shared databases between services.**

Each service owns its data and exposes behavior via APIs or events.

### Databases

#### PostgreSQL (Amazon RDS)

Used for all **persistent, transactional data**: - Orders - Payments -
Inventory - Users - Product catalog

#### Redis (ElastiCache or equivalent)

Used for **ephemeral and high-performance needs**: - Shopping carts -
Distributed locks - Rate limiting - Inventory reservation locks -
Pub/Sub for real-time updates

#### Amazon S3

Used for: - Product images - Invoices - Exported reports - Logs and
artifacts

------------------------------------------------------------------------

## 6. Database Sharding Strategy

Sharding is intentionally applied **only where it makes sense**.

### Sharded Domains

-   **Catalog Service**
-   Potentially User data at scale

**Shard Key Example** - `vendor_id`

Sharding is implemented at the **application level**, allowing: - Clear
routing logic - Cloud portability - Easier demonstration and reasoning

### Non-Sharded Domains

-   Orders
-   Payments
-   Inventory

These require **strong consistency** and therefore use single-writer
databases with read replicas.

------------------------------------------------------------------------

## 7. Messaging & Eventing

The system uses **AWS SNS + SQS** for asynchronous communication.

### Why SNS + SQS?

-   Fully managed
-   Built-in retries and DLQs
-   Cost-effective
-   Sufficient for most business workflows

Kafka is intentionally **not used by default** to avoid unnecessary
operational complexity.

### Event Examples

-   `order.created`
-   `payment.authorized`
-   `payment.failed`
-   `inventory.reserved`
-   `inventory.failed`
-   `order.confirmed`
-   `order.cancelled`

Events are immutable and represent **facts**, not commands.

------------------------------------------------------------------------

## 8. Order Processing -- Saga Pattern

Order processing is implemented using an **Orchestrated Saga Pattern**.

### Orchestrator

-   **Order Service**

### Happy Path

1.  Order is created
2.  Payment is processed asynchronously
3.  Inventory is reserved
4.  Order is confirmed
5.  Notifications are sent

### Failure & Compensation

-   Payment failure → Order cancelled
-   Inventory failure → Order cancelled + payment refunded
-   Failures handled via **compensating actions**, not rollbacks

Dead-letter queues capture unrecoverable failures for analysis and
replay.

------------------------------------------------------------------------

## 9. Real-Time Communication

A dedicated **Socket Service** provides: - Real-time order status
updates - Admin dashboard live views

Implementation: - WebSockets - Redis Pub/Sub - Stateless socket servers

------------------------------------------------------------------------

## 10. Deployment Strategy

### Container-First Design

All backend services are containerized using Docker.

### Supported Deployment Options

#### AWS ECS (Fargate)

-   Lower operational overhead
-   Cost-efficient for demos
-   Managed scaling

#### Kubernetes (Local / EKS)

-   Demonstrates platform expertise
-   Cloud portability
-   Advanced scaling and rollout strategies

The system can run on **either platform without code changes**.

------------------------------------------------------------------------

## 11. Infrastructure as Code

Infrastructure is defined using: - Terraform or AWS CDK

Benefits: - Repeatable environments - Version-controlled infra - Clear
separation of concerns

------------------------------------------------------------------------

## 12. CI/CD Strategy

Each service has an independent pipeline: 1. Checkout 2. Tests 3. Docker
build 4. Push image 5. Deploy

This enables fast iteration and fault isolation.

------------------------------------------------------------------------

## 13. Observability & Reliability

-   Centralized logging
-   Metrics and alerts
-   Retries with backoff
-   Dead-letter queues
-   Idempotent APIs

------------------------------------------------------------------------

## 14. Cost-Aware Design

-   Serverless for bursty workloads
-   Managed services preferred
-   Always-on services minimized

Production-scale infra is documented, not always deployed.

------------------------------------------------------------------------

## 15. Architectural Principles Summary

-   Clear service boundaries
-   Event-driven workflows
-   Consistency where required
-   Horizontal scalability
-   Cloud agnostic
-   Cost conscious

------------------------------------------------------------------------

## 16. Final Notes

This project is designed to: - Serve as a **global-ready portfolio** -
Enable deep architecture discussions - Scale without rewrites

Focus is on **engineering judgment**, not over-engineering.
