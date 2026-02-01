import Link from "next/link";
import { PlaceholderImage } from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";

const timeline = [
  { step: "Order Placed", date: "2026-01-20 10:30", done: true },
  { step: "Confirmed", date: "2026-01-20 11:00", done: true },
  { step: "Shipped", date: "2026-01-22 09:00", done: true },
];

export default function VendorOrderDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8">
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/vendor/orders" className="hover:text-primary">Orders</Link> / <span className="font-medium">{params.id}</span>
      </nav>
      <h1 className="text-3xl font-bold mb-8">Order {params.id}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="font-semibold mb-4">Status Timeline</h2>
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 pb-4">
                <div className={`w-4 h-4 rounded-full ${item.done ? "bg-green-500" : "bg-gray-300"}`} />
                <div>
                  <p className="font-medium">{item.step}</p>
                  <p className="text-sm text-gray-600">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border rounded-lg p-6">
            <h2 className="font-semibold mb-4">Items</h2>
            <div className="flex gap-4">
              <PlaceholderImage width={80} height={80} text="Product" />
              <div>
                <p className="font-medium">Product One</p>
                <p>Qty: 2 × $86</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="border rounded-lg p-6">
            <h2 className="font-semibold mb-4">Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between"><span>Subtotal</span><span>$294</span></div>
              <div className="flex justify-between font-bold"><span>Total</span><span>$294</span></div>
            </div>
          </div>
          <Button>Update Status</Button>
        </div>
      </div>
    </div>
  );
}
