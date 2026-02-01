import Link from "next/link";
import { PlaceholderImage } from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const offers = [
  { id: 1, title: "Flash Sale - 50% Off", endDate: "2026-02-01" },
  { id: 2, title: "Buy 2 Get 1 Free", endDate: "2026-02-15" },
  { id: 3, title: "Weekend Special", endDate: "2026-01-31" },
];

export default function SpecialOffersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Special Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <Link key={offer.id} href={`/campaigns/${offer.id}`}>
            <Card className="overflow-hidden hover:shadow-xl transition">
              <PlaceholderImage width={400} height={200} text={offer.title} className="w-full" />
              <CardContent className="p-4">
                <h3 className="font-semibold">{offer.title}</h3>
                <p className="text-sm text-gray-600">Ends: {offer.endDate}</p>
                <Button className="w-full mt-3">Shop Now</Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
