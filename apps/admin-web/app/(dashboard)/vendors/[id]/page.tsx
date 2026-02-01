import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VendorDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8">
      <Link href="/vendors" className="text-sm text-slate-600 hover:underline mb-4 block">← Back to Vendors</Link>
      <h1 className="text-2xl font-bold mb-8">Vendor {params.id}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader><h2 className="font-semibold">Details</h2></CardHeader>
          <CardContent>
            <p>Name: Vendor {params.id}</p>
            <p>Email: vendor{params.id}@example.com</p>
            <p>Status: Active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><h2 className="font-semibold">Quick Links</h2></CardHeader>
          <CardContent className="space-y-2">
            <Link href={`/vendors/${params.id}/orders`}><Button variant="outline" className="w-full justify-start">Orders</Button></Link>
            <Link href={`/vendors/${params.id}/products`}><Button variant="outline" className="w-full justify-start">Products</Button></Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
