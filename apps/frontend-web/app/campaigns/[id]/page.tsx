import Link from "next/link";
import { PlaceholderImage } from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  const products = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Campaign Product ${i + 1}`,
    price: 60 + i * 10,
    oldPrice: 100 + i * 15,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link> / <Link href="/campaigns" className="hover:text-primary">Campaigns</Link> / <span className="font-medium">Campaign {params.id}</span>
      </nav>
      <h1 className="text-3xl font-bold mb-8">Campaign Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <Link key={p.id} href={`/products/${p.id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition">
              <PlaceholderImage width={300} height={180} text={p.name} className="w-full" />
              <CardContent className="p-3">
                <h3 className="font-medium text-sm truncate">{p.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">${p.price}</span>
                  <span className="text-gray-500 text-sm line-through">${p.oldPrice}</span>
                </div>
                <Button size="sm" className="w-full mt-2">Add to Cart</Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
