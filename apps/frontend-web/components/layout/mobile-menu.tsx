"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, X } from "lucide-react";

const megaMenuItems = [
  {
    label: "FEATURES",
    href: "/categories",
    links: [
      { label: "All Categories", href: "/categories" },
      { label: "Special Offers", href: "/special-offers" },
      { label: "Electronics", href: "/categories/electronics" },
      { label: "Fashion", href: "/categories/fashion" },
    ],
  },
  {
    label: "COLLECTIONS",
    href: "/categories",
    links: [
      { label: "Top Trending", href: "/categories" },
      { label: "New Arrivals", href: "/special-offers" },
      { label: "Flash Sale", href: "/campaigns" },
      { label: "Clearance", href: "/categories" },
    ],
  },
  {
    label: "ACCESSORIES",
    href: "/categories/accessories",
    links: [
      { label: "All Accessories", href: "/categories/accessories" },
      { label: "Jewelry", href: "/categories/jewelry" },
      { label: "Bags", href: "/categories/bags" },
    ],
  },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-white shadow-xl z-50 overflow-y-auto lg:hidden">
        <div className="flex items-center justify-between p-4 border-b bg-primary-500 text-white">
          <span className="font-bold">Menu</span>
          <button onClick={onClose} className="p-2 -m-2">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4">
          <Link
            href="/"
            className="block py-3 px-2 border-b text-gray-800 font-medium"
            onClick={onClose}
          >
            HOME
          </Link>
          {megaMenuItems.map((item) => (
            <div key={item.label} className="border-b">
              <button
                onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                className="w-full flex items-center justify-between py-3 px-2 text-gray-800 font-medium"
              >
                {item.label}
                <ChevronDown
                  className={`h-4 w-4 transition ${expanded === item.label ? "rotate-180" : ""}`}
                />
              </button>
              {expanded === item.label && (
                <div className="pl-4 pb-3 space-y-2">
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-600"
                    onClick={onClose}
                  >
                    View All
                  </Link>
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 py-2 text-gray-600"
                      onClick={onClose}
                    >
                      <ChevronRight className="h-4 w-4" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/"
            className="block py-3 px-2 border-b text-gray-800 font-medium"
            onClick={onClose}
          >
            BLOG
          </Link>
          <div className="mt-4 pt-4 border-t space-y-2">
            <Link
              href="/login"
              className="block py-2 px-2 text-primary font-medium"
              onClick={onClose}
            >
              Login
            </Link>
            <Link
              href="/vendor/login"
              className="block py-2 px-2 text-primary font-medium"
              onClick={onClose}
            >
              Vendor Panel
            </Link>
            <Link
              href="/cart"
              className="block py-2 px-2 text-primary font-medium"
              onClick={onClose}
            >
              View Cart
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
