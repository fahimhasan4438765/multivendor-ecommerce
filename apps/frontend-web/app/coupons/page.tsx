import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const coupons = [
  { code: "SAVE20", discount: "20%", minOrder: 50, expiry: "2026-02-28" },
  { code: "FLAT50", discount: "$50", minOrder: 200, expiry: "2026-03-15" },
];

export default function CouponsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Coupons & Vouchers</h1>
      <div className="space-y-4">
        {coupons.map((c) => (
          <Card key={c.code} className="border-2 border-dashed border-primary overflow-hidden">
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xl">
                  {c.discount}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{c.code}</h3>
                  <p className="text-sm text-gray-600">Min order: ${c.minOrder}</p>
                  <p className="text-sm text-gray-600">Valid until: {c.expiry}</p>
                </div>
              </div>
              <Button>Copy Code</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
