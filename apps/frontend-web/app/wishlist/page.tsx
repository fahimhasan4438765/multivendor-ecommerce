import { PlaceholderImage } from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const wishlistItems = [
  { id: 1, name: "Product One", price: 86 },
  { id: 2, name: "Product Two", price: 122 },
];

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <PlaceholderImage width={300} height={200} text={item.name} className="w-full" />
            <CardContent className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-primary font-bold">${item.price}</p>
              <div className="flex gap-2 mt-3">
                <Button size="sm" className="flex-1">Add to Cart</Button>
                <Button variant="destructive" size="sm">Remove</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
