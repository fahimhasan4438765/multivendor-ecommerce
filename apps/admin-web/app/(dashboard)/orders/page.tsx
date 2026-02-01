import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const orders = [
  { id: "ORD-001", source: "Admin", customer: "John", total: 294, status: "Delivered" },
  { id: "ORD-002", source: "Vendor A", customer: "Jane", total: 122, status: "Shipped" },
];

export default function OrdersPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Centralized Orders</h1>
      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4">Order ID</th>
                <th className="text-left p-4">Source</th>
                <th className="text-left p-4">Customer</th>
                <th className="text-left p-4">Total</th>
                <th className="text-left p-4">Status</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b last:border-0">
                  <td className="p-4 font-medium">{o.id}</td>
                  <td className="p-4">{o.source}</td>
                  <td className="p-4">{o.customer}</td>
                  <td className="p-4">${o.total}</td>
                  <td className="p-4"><span className="px-2 py-1 rounded bg-green-100 text-green-800 text-sm">{o.status}</span></td>
                  <td className="p-4"><Button variant="outline" size="sm">View</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
