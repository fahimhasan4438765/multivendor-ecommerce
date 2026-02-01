"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight, Flame, Monitor, Car, BookOpen, Heart, Trophy, Sparkles, Home, Baby, Utensils } from "lucide-react";

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

export function CategorySidebar() {
  return (
    <aside className="w-64 flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden">
      <button className="w-full flex items-center justify-between px-4 py-3 bg-primary-500 text-white font-semibold">
        ALL CATEGORIES
        <ChevronDown className="h-4 w-4" />
      </button>
      <ul className="divide-y">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <li key={cat.slug}>
              <Link
                href={`/categories/${cat.slug}`}
                className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-primary" />
                  {cat.name}
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href="/categories" className="block px-4 py-3 text-primary font-medium hover:bg-gray-50">
        More Categories
      </Link>
    </aside>
  );
}
