import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OffersSettingsPage() {
  return (
    <div className="p-8">
      <Link href="/settings" className="text-sm text-slate-600 hover:underline mb-4 block">← Back to Settings</Link>
      <h1 className="text-2xl font-bold mb-8">Offers</h1>
      <Card>
        <CardHeader><h2 className="font-semibold">Platform Offers</h2></CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">Manage site-wide offers and promotions.</p>
          <Button>Add Offer</Button>
        </CardContent>
      </Card>
    </div>
  );
}
