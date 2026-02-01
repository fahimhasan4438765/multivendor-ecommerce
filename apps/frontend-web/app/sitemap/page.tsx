import Link from "next/link";

const pages = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Cart", href: "/cart" },
  { name: "Checkout", href: "/checkout" },
  { name: "Orders", href: "/orders" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Wishlist", href: "/wishlist" },
  { name: "Coupons", href: "/coupons" },
  { name: "Special Offers", href: "/special-offers" },
  { name: "Campaigns", href: "/campaigns" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Refund Policy", href: "/refund" },
  { name: "Contact", href: "/contact" },
  { name: "About Us", href: "/about" },
  { name: "Vendor Login", href: "/vendor/login" },
  { name: "Vendor Register", href: "/vendor/register" },
  { name: "Vendor Dashboard", href: "/vendor/dashboard" },
  { name: "Vendor Products", href: "/vendor/products" },
  { name: "Vendor Orders", href: "/vendor/orders" },
  { name: "Vendor Settings", href: "/vendor/settings" },
  { name: "Vendor Profile", href: "/vendor/profile" },
  { name: "Vendor Accounts", href: "/vendor/accounts" },
  { name: "Vendor Inventory", href: "/vendor/inventory" },
  { name: "Vendor Offers", href: "/vendor/offers" },
];

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="block p-3 border rounded-lg hover:bg-gray-50"
          >
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
