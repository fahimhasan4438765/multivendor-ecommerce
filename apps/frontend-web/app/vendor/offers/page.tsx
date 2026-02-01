import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const offers = [
  { id: 1, code: "VENDOR20", discount: "20%", products: 5, active: true },
];

export default function VendorOffersPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Offers</h1>
        <Button>Create Offer</Button>
      </div>
      <div className="space-y-4">
        {offers.map((o) => (
          <Card key={o.id}>
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold">{o.code}</h3>
                <p className="text-sm text-gray-600">{o.discount} off • {o.products} products</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${o.active ? "bg-green-100 text-green-800" : "bg-gray-100"}`}>
                {o.active ? "Active" : "Inactive"}
              </span>
              <Button variant="outline" size="sm">Edit</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
