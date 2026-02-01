"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const megaMenuItems = [
  {
    label: "FEATURES",
    href: "/categories",
    cols: [
      { title: "Shop", links: [{ label: "All Categories", href: "/categories" }, { label: "Special Offers", href: "/special-offers" }, { label: "Hot Deals", href: "/campaigns" }] },
      { title: "By Type", links: [{ label: "Electronics", href: "/categories/electronics" }, { label: "Fashion", href: "/categories/fashion" }, { label: "Home & Garden", href: "/categories/home-garden" }] },
    ],
  },
  {
    label: "COLLECTIONS",
    href: "/categories",
    cols: [
      { title: "Trending", links: [{ label: "Top Trending", href: "/categories" }, { label: "New Arrivals", href: "/special-offers" }, { label: "Best Sellers", href: "/categories" }] },
      { title: "Deals", links: [{ label: "Flash Sale", href: "/campaigns" }, { label: "Clearance", href: "/categories" }, { label: "Under $50", href: "/categories" }] },
    ],
  },
  {
    label: "ACCESSORIES",
    href: "/categories/accessories",
    cols: [
      { title: "Accessories", links: [{ label: "All Accessories", href: "/categories/accessories" }, { label: "Jewelry", href: "/categories/jewelry" }, { label: "Bags", href: "/categories/bags" }] },
    ],
  },
];

export function MegaMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-1">
      <Link href="/" className="px-4 py-3 hover:bg-primary-600 transition">
        HOME
      </Link>
      {megaMenuItems.map((item, i) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => setOpenIndex(i)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          <Link
            href={item.href}
            className="flex items-center gap-1 px-4 py-3 hover:bg-primary-600 transition"
          >
            {item.label}
            <ChevronDown className="h-4 w-4" />
          </Link>
          {openIndex === i && (
            <div className="absolute left-0 top-full bg-white text-gray-900 shadow-xl py-6 px-6 z-50 min-w-[500px]">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {item.cols.map((col) => (
                  <div key={col.title}>
                    <p className="font-semibold text-primary mb-3">{col.title}</p>
                    <div className="space-y-2">
                      {col.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block py-1 hover:text-primary transition"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      <Link href="/" className="px-4 py-3 hover:bg-primary-600 transition">
        BLOG
      </Link>
    </nav>
  );
}
