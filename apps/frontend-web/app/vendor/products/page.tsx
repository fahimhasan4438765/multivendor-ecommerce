import { PlaceholderImage } from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  { id: 1, name: "Product A", price: 99, stock: 50 },
  { id: 2, name: "Product B", price: 149, stock: 30 },
];

export default function VendorProductsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button>Add Product</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <Card key={p.id}>
            <PlaceholderImage width={300} height={150} text={p.name} className="w-full" />
            <CardContent className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-primary font-bold">${p.price}</p>
              <p className="text-sm text-gray-600">Stock: {p.stock}</p>
              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="outline">Edit</Button>
                <Button size="sm" variant="destructive">Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
