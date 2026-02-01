"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Flame, Monitor, Car, BookOpen, Heart, Trophy, Sparkles, Home, Baby, Utensils } from "lucide-react";

const categories = [
  { name: "Hot Deal", slug: "hot-deal", icon: Flame },
  { name: "Electronics", slug: "electronics", icon: Monitor },
  { name: "Travel & Vacation", slug: "travel-vacation", icon: Car },
  { name: "Book Stationery", slug: "books", icon: BookOpen },
  { name: "Fashion", slug: "fashion", icon: Heart },
  { name: "Sport & Entertainment", slug: "sports", icon: Trophy },
  { name: "Spa & Massage", slug: "spa", icon: Sparkles },
  { name: "Real House", slug: "home", icon: Home },
  { name: "Mom & Baby", slug: "mom-baby", icon: Baby },
  { name: "Food & Restaurant", slug: "food", icon: Utensils },
];

export function MobileCategoryMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lg:hidden mb-4" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-primary-500 text-white font-semibold rounded-lg shadow"
      >
        ALL CATEGORIES
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-2 bg-white border rounded-lg shadow-lg overflow-hidden max-h-[70vh] overflow-y-auto">
          <ul className="divide-y">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                    {cat.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/categories"
            className="block px-4 py-3 text-primary font-medium hover:bg-gray-50 border-t"
            onClick={() => setOpen(false)}
          >
            More Categories
          </Link>
        </div>
      )}
    </div>
  );
}
