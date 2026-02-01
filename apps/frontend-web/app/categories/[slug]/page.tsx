import Link from "next/link";
import { PlaceholderImage } from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CategoryFilters } from "@/components/category/filters";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1} - ${slug}`,
    price: 99 + i * 10,
    rating: 4.5,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link> / <Link href="/categories" className="hover:text-primary">Categories</Link> / <span className="font-medium">{slug}</span>
      </nav>
      <h1 className="text-3xl font-bold capitalize mb-8">{slug.replace(/-/g, " ")}</h1>
      <div className="flex gap-8">
        <CategoryFilters />
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {products.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition h-full">
                <PlaceholderImage width={300} height={200} text={p.name} className="w-full" />
                <CardContent className="p-3">
                  <h3 className="font-medium text-sm truncate">{p.name}</h3>
                  <p className="text-primary font-bold">${p.price}</p>
                  <Button size="sm" className="w-full mt-2">Add to Cart</Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
