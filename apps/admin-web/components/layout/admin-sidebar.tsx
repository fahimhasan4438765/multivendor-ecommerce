"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Store,
  Package,
  ShoppingCart,
  Truck,
  CreditCard,
  Users,
  UserCog,
  Mail,
  Wallet,
  Palette,
} from "lucide-react";

const ecommerceItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admins", label: "Admin", icon: UserCog },
  { href: "/vendors", label: "Vendors", icon: Store },
  { href: "/products", label: "Products", icon: Package },
  { href: "/orders", label: "Orders", icon: ShoppingCart },
  { href: "/users", label: "Users", icon: Users },
  { href: "/delivery", label: "Delivery", icon: Truck },
];

const communicationItems = [
  { href: "/email", label: "Email", icon: Mail },
  { href: "/payment", label: "Payment Setup", icon: CreditCard },
  { href: "/accounts", label: "Accounts", icon: Wallet },
  { href: "/settings", label: "Settings", icon: Palette },
];

function NavSection({ title, items }: { title: string; items: typeof ecommerceItems }) {
  const pathname = usePathname();

  return (
    <div className="mb-6">
      <p className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
        {title}
      </p>
      <div className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function AdminSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <Link href="/dashboard" className="text-xl font-bold">
          Ecommerce
        </Link>
      </div>
      <nav className="flex-1 p-4 overflow-y-auto">
        <NavSection title="Ecommerce" items={ecommerceItems} />
        <NavSection title="Communication" items={communicationItems} />
      </nav>
    </aside>
  );
}
