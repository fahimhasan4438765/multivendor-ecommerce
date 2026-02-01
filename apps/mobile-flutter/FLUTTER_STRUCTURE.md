# 📱 Flutter Structure (Modular, Riverpod, Offline-First)

## Core Principles
- Feature-first modular architecture
- Strict separation of concerns
- Riverpod for state management
- Offline-first (local cache → sync)
- DTO-driven API communication
- Test-first mindset

---

## Folder Structure

```
lib/
├── core/
│   ├── config/           # App config, env
│   ├── network/          # Dio client, interceptors
│   ├── storage/          # Hive / SQLite
│   ├── errors/           # Failure models
│   ├── utils/
│   └── widgets/          # Shared UI components
│
├── features/
│   ├── auth/
│   │   ├── data/
│   │   │   ├── dto/
│   │   │   ├── datasources/
│   │   │   └── repositories/
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   ├── usecases/
│   │   │   └── repositories/
│   │   ├── presentation/
│   │   │   ├── providers/
│   │   │   ├── pages/
│   │   │   └── widgets/
│   │   └── tests/
│   └── order/
│       └── ...
│
├── app.dart
└── main.dart
```

---

## Rules
- No file > 200 LOC
- No UI logic inside providers
- Providers only expose state + actions
- DTO ≠ Entity (mapping mandatory)
- Every feature must support offline fallback
- Each feature must have unit + widget tests
