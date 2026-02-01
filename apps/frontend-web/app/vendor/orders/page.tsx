import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const orders = [
  { id: "ORD-101", customer: "John D.", total: 294, status: "Pending" },
  { id: "ORD-102", customer: "Jane S.", total: 122, status: "Shipped" },
];

export default function VendorOrdersPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold">{order.id}</h3>
                <p className="text-sm text-gray-600">{order.customer}</p>
                <p className="font-bold text-primary">${order.total}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                order.status === "Shipped" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
              }`}>{order.status}</span>
              <Link href={`/vendor/orders/${order.id}`}>
                <Button variant="outline">View</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
