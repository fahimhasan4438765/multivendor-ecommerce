import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const inventory = [
  { id: 1, name: "Product A", sku: "SKU-001", stock: 50, lowStock: 10 },
  { id: 2, name: "Product B", sku: "SKU-002", stock: 5, lowStock: 10 },
];

export default function VendorInventoryPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Inventory</h1>
      <div className="space-y-4">
        {inventory.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.sku}</p>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <label className="text-sm text-gray-600">Stock</label>
                  <Input type="number" defaultValue={item.stock} className="w-20" />
                </div>
                {item.stock <= item.lowStock && (
                  <span className="text-amber-600 text-sm font-medium">Low stock!</span>
                )}
              </div>
              <Button size="sm">Update</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
