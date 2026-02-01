import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", orders: 5 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", orders: 12 },
];

export default function UsersPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Customers</h1>
      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Orders</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="border-b last:border-0">
                  <td className="p-4 font-medium">{c.name}</td>
                  <td className="p-4">{c.email}</td>
                  <td className="p-4">{c.orders}</td>
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
