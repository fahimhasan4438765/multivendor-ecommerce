# ⚙️ Backend Microservice Structure (Bun)

## Core Principles
- One responsibility per file
- Files < 150 LOC
- Explicit dependency injection
- Clean layering
- Event-first design

---

## Folder Structure

```
src/
├── config/
├── modules/
│   ├── order/
│   │   ├── controller.ts
│   │   ├── service.ts
│   │   ├── repository.ts
│   │   ├── routes.ts
│   │   ├── dto.ts
│   │   └── events.ts
│   └── payment/
│       └── ...
│
├── infrastructure/
│   ├── db/
│   ├── redis/
│   ├── messaging/
│   └── storage/
│
├── shared/
│   ├── errors/
│   ├── logger/
│   ├── middleware/
│   └── utils/
│
├── app.ts
└── server.ts
```

---

## Rules
- Controller: request/response only
- Service: business logic
- Repository: data access
- Events published from service layer
- No direct DB access outside repositories

---

## API Documentation
- All API endpoints must be Swagger documented
- Use OpenAPI 3.0 spec
- Document request/response schemas, error codes, and examples

---

## Testing
- Unit: services
- Integration: repositories
- Contract tests for events

---

## Maintainability
- Small files
- Clear naming
- No circular deps
- Explicit boundaries
