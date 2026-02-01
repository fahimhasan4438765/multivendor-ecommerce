import Link from "next/link";
import { PlaceholderImage } from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const campaigns = [
  { id: 1, name: "Summer Sale", discount: 40, start: "2026-01-01", end: "2026-02-01" },
  { id: 2, name: "New Year Promo", discount: 25, start: "2026-01-01", end: "2026-01-31" },
];

export default function CampaignsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Special Campaigns</h1>
      <p className="text-gray-600 mb-8">Time-limited discounts available for a limited period.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map((c) => (
          <Card key={c.id} className="overflow-hidden border-2 border-primary/20">
            <div className="flex flex-col md:flex-row">
              <PlaceholderImage width={300} height={200} text={c.name} className="md:w-1/2" />
              <CardContent className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold">{c.name}</h3>
                <p className="text-2xl text-primary font-bold my-2">-{c.discount}% OFF</p>
                <p className="text-sm text-gray-600">Valid: {c.start} - {c.end}</p>
                <Link href={`/campaigns/${c.id}`} className="mt-4">
                  <Button>View Products</Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
