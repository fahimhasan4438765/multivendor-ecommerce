# Admin Panel - Pages Documentation

Design-first admin panel for TopDeal Multi-Vendor E-Commerce.

## Auth (No Public Register)

| Page | Route | Description |
|------|-------|-------------|
| Login | `/login` | Admin login |
| Forgot Password | `/forgot-password` | Request reset link |
| Reset Password | `/reset-password` | Set new password |

**Note:** Only admins can create/invite other admins. No public registration.

## Dashboard Pages

| Page | Route | Description |
|------|-------|-------------|
| Dashboard | `/dashboard` | Overview, stats |
| Profile | `/profile` | Admin profile |
| Admin Settings | `/admin-settings` | Admin preferences |
| Vendors | `/vendors` | Vendor list |
| Vendor Details | `/vendors/[id]` | Vendor info, orders, products |
| Products | `/products` | Centralized (admin + vendor) |
| Orders | `/orders` | Centralized (admin + vendor) |
| Users | `/users` | Customer list |
| Settings | `/settings` | Commission, offers, coupons, site, theme |
| Delivery | `/delivery` | Pathao, DHL, RedX etc. |
| Payment | `/payment` | Gateway setup |
| Admin Manage | `/admins` | Admin list, invite, edit |
| Email Panel | `/email` | Send email, templates |
| Notifications | `/notifications` | Notification list |
| Messaging | `/messaging` | Chat with vendors/customers |
| Accounts | `/accounts` | Bank, payouts, invoices |

## Settings Sub-pages

- `/settings/commission` - Commission rates
- `/settings/offers` - Platform offers
- `/settings/coupons` - Coupon codes
- `/settings/site` - Site settings
- `/settings/theme` - Theming & design

## Run

```bash
pnpm dev:admin
# or
cd apps/admin-web && pnpm dev
```

Runs on http://localhost:3001
