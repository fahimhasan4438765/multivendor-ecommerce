# Frontend Web - Pages Documentation

Design-first implementation for TopDeal Multi-Vendor E-Commerce. All pages use Tailwind CSS, shadcn/ui, and placeholder images.

## Design System

- **Top Bar**: Light blue (sky-100), logo, address, email/phone, free delivery, cart
- **Header**: Orange background (`bg-primary-500`), mega menu, search with All Categories dropdown
- **Left Sidebar** (Homepage): ALL CATEGORIES with icon list (Hot Deal, Electronics, etc.)
- **Footer**: Black background, gray text, copyright © 2026 Fahim Hasan
- **Color palette**: Primary orange, accent colors (emerald, blue, purple, pink)
- **Placeholder images**: Use `<PlaceholderImage>` component until real assets

## Homepage Sections (15 types)

1. Shop by Category
2. Top Trending
3. Hot Deals
4. Limited Offers
5. New Arrivals
6. Best Sellers
7. Flash Sale
8. Clearance
9. Vendor Picks
10. Featured Products
11. Seasonal Deals
12. Under $50
13. Top Rated
14. Bundle Deals
15. Today's Deals

## Category Page Filters

- Price Range (min/max)
- Category checkboxes
- Brand checkboxes
- Gender (Men, Women, Unisex, Kids)
- Preference (Eco-Friendly, Premium, Budget, Organic)

## Product Details

- Image gallery: thumbnail carousel, click to switch main image
- Hover on main image: zoom mode
- Attributes: Color, Size variations
- Stock availability
- Favorite & Wishlist icons
- Details tab (specs, description)
- Reviews tab (ratings, write review)
- Comments tab (Q&A, post comment)
- Related Products section

## Homepage Banners

- Full-width promo banners between category sections (after every 5 sections)

## Footer Layout

- Left: Logo + office location
- Center: Shop & Support links
- Right: Newsletter + social links

---

## Customer Pages

| # | Page | Route | Description |
|---|------|-------|-------------|
| 1 | Homepage | `/` | Hero, categories, hot deals, features |
| 2 | Category List | `/categories` | All product categories grid |
| 3 | Category Products | `/categories/[slug]` | Products in a category |
| 4 | Product Details | `/products/[id]` | Single product with add to cart |
| 5 | Cart | `/cart` | Shopping cart with order summary |
| 6 | Checkout | `/checkout` | Shipping, payment, order summary |
| 7 | Order List | `/orders` | User order history |
| 8 | Order Details | `/orders/[id]` | Order with delivery timeline |
| 9 | Login | `/login` | User sign in |
| 10 | Register | `/register` | User registration |
| 11 | Terms | `/terms` | Terms and conditions |
| 12 | Privacy | `/privacy` | Privacy policy |
| 13 | Refund | `/refund` | Refund policy |
| 14 | Dashboard | `/dashboard` | User account overview |
| 15 | Wishlist | `/wishlist` | Saved products |
| 16 | Coupons | `/coupons` | Coupon codes and vouchers |
| 17 | Special Offers | `/special-offers` | Featured deals |
| 18 | Campaigns | `/campaigns` | Time-limited campaigns |
| 19 | Campaign Detail | `/campaigns/[id]` | Campaign products |
| 20 | Contact | `/contact` | Contact form |
| 21 | About Us | `/about` | Company info, mission, values |
| 22 | Sitemap | `/sitemap` | Human-readable sitemap |

---

## Vendor Pages

| # | Page | Route | Description |
|---|------|-------|-------------|
| 1 | Vendor Login | `/vendor/login` | Vendor sign in |
| 2 | Vendor Register | `/vendor/register` | Become a vendor |
| 3 | Vendor Dashboard | `/vendor/dashboard` | Sales, orders stats |
| 4 | Vendor Products | `/vendor/products` | Product management |
| 5 | Vendor Orders | `/vendor/orders` | Order list |
| 6 | Vendor Order Details | `/vendor/orders/[id]` | Order with status |
| 7 | Vendor Settings | `/vendor/settings` | Store settings |
| 8 | Vendor Profile | `/vendor/profile` | Business profile |
| 9 | Vendor Accounts | `/vendor/accounts` | Payout, payment data |
| 10 | Vendor Inventory | `/vendor/inventory` | Stock management |
| 11 | Vendor Offers | `/vendor/offers` | Discount campaigns |

---

## Components

- **Header** (`components/layout/header.tsx`): Orange nav, search, cart, user icons
- **Footer** (`components/layout/footer.tsx`): Black footer, links, copyright
- **PlaceholderImage** (`components/layout/placeholder.tsx`): Gradient placeholder
- **VendorSidebar** (`components/layout/vendor-sidebar.tsx`): Vendor panel nav

---

## Routes Summary

```
/                    Homepage
/categories          Category list
/categories/[slug]   Category products
/products/[id]       Product details
/cart                Cart
/checkout            Checkout
/orders              Order list
/orders/[id]         Order details
/login               Login
/register            Register
/dashboard           User dashboard
/wishlist            Wishlist
/coupons             Coupons
/special-offers      Special offers
/campaigns           Campaigns
/campaigns/[id]      Campaign products
/terms               Terms
/privacy             Privacy
/refund              Refund
/contact             Contact
/sitemap             Sitemap

/vendor/login        Vendor login
/vendor/register     Vendor register
/vendor/dashboard    Vendor dashboard
/vendor/products     Vendor products
/vendor/orders       Vendor orders
/vendor/orders/[id]  Vendor order details
/vendor/settings     Vendor settings
/vendor/profile      Vendor profile
/vendor/accounts     Vendor accounts
/vendor/inventory    Vendor inventory
/vendor/offers       Vendor offers
```

---

## Next Steps (API Integration)

When connecting to backend:

1. Replace placeholder data with API calls
2. Add real product images
3. Implement auth flow
4. Wire cart/checkout to order service
5. Connect vendor panel to backend APIs
