import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const orders = [
  { id: "ORD-001", date: "2026-01-28", total: 294, status: "Delivered" },
  { id: "ORD-002", date: "2026-01-25", total: 122, status: "Shipped" },
  { id: "ORD-003", date: "2026-01-20", total: 86, status: "Processing" },
];

export default function OrdersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold">{order.id}</h3>
                <p className="text-sm text-gray-600">{order.date}</p>
                <p className="font-bold text-primary">${order.total}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                order.status === "Delivered" ? "bg-green-100 text-green-800" :
                order.status === "Shipped" ? "bg-blue-100 text-blue-800" :
                "bg-amber-100 text-amber-800"
              }`}>{order.status}</span>
              <Link href={`/orders/${order.id}`}>
                <Button variant="outline">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
