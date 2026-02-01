import Link from "next/link";
import { PlaceholderImage } from "@/components/layout/placeholder";

const categories = [
  { name: "Electronics", slug: "electronics", count: 120 },
  { name: "Fashion", slug: "fashion", count: 340 },
  { name: "Home & Garden", slug: "home-garden", count: 89 },
  { name: "Sports", slug: "sports", count: 156 },
  { name: "Books", slug: "books", count: 234 },
  { name: "Beauty", slug: "beauty", count: 78 },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/categories/${cat.slug}`}>
            <div className="group rounded-lg overflow-hidden border hover:shadow-xl transition">
              <PlaceholderImage width={400} height={200} text={cat.name} className="w-full group-hover:scale-105 transition" />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-semibold">{cat.name}</h2>
                <p className="text-gray-600 text-sm">{cat.count} products</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
