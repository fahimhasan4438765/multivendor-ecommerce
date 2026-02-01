"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Settings,
  User,
  Wallet,
  Boxes,
  FileText,
  Tag,
} from "lucide-react";

const navItems = [
  { href: "/vendor/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/vendor/products", label: "Products", icon: Package },
  { href: "/vendor/orders", label: "Orders", icon: ShoppingCart },
  { href: "/vendor/inventory", label: "Inventory", icon: Boxes },
  { href: "/vendor/offers", label: "Offers", icon: Tag },
  { href: "/vendor/accounts", label: "Accounts", icon: Wallet },
  { href: "/vendor/profile", label: "Profile", icon: User },
  { href: "/vendor/settings", label: "Settings", icon: Settings },
];

export function VendorSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-4">
      <Link href="/vendor/dashboard" className="text-xl font-bold block mb-8">
        Vendor Panel
      </Link>
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive ? "bg-primary text-white" : "hover:bg-gray-800"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-8 pt-8 border-t border-gray-700">
        <Link href="/" className="text-sm text-gray-400 hover:text-white">
          ← Back to Store
        </Link>
      </div>
    </aside>
  );
}
