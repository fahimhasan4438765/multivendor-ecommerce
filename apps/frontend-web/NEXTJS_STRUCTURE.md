# 🌐 Next.js Web Structure (PWA, Maintainable)

## Core Principles
- Feature-based foldering
- Files < 100 LOC
- Composition over complexity
- PWA-first
- Clean separation of UI / logic / API

---

## Folder Structure

```
app/
├── (public)/
│   ├── page.tsx
│   └── layout.tsx
│
├── dashboard/
│   ├── page.tsx
│   ├── actions.ts
│   ├── api.ts
│   └── components/
│       ├── stats-card.tsx
│       └── chart.tsx
│
├── api/
│   └── auth/route.ts
│
├── components/
│   ├── ui/
│   └── layout/
│
├── hooks/
├── lib/
│   ├── http.ts
│   ├── auth.ts
│   └── constants.ts
│
├── styles/
└── public/
```

---

## Rules
- Pages only orchestrate components
- No business logic in UI components
- API logic lives in `api.ts`
- Reusable logic in hooks
- Each feature has its own folder

---

## PWA
- Service Worker enabled
- Offline fallback pages
- IndexedDB caching

---

## Testing
- Unit: utils, hooks
- Component tests
- E2E (Playwright)
