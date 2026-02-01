import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Product A", source: "Admin", price: 99, stock: 50 },
  { id: 2, name: "Product B", source: "Vendor A", price: 149, stock: 20 },
];

export default function ProductsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Centralized Products</h1>
        <Button>Add Product</Button>
      </div>
      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4">Product</th>
                <th className="text-left p-4">Source</th>
                <th className="text-left p-4">Price</th>
                <th className="text-left p-4">Stock</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b last:border-0">
                  <td className="p-4 font-medium">{p.name}</td>
                  <td className="p-4">{p.source}</td>
                  <td className="p-4">${p.price}</td>
                  <td className="p-4">{p.stock}</td>
                  <td className="p-4"><Button variant="outline" size="sm">Edit</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
