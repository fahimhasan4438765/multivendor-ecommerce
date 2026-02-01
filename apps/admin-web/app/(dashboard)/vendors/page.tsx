import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const vendors = [
  { id: 1, name: "Vendor A", email: "vendor@a.com", status: "Active", products: 24 },
  { id: 2, name: "Vendor B", email: "vendor@b.com", status: "Pending", products: 12 },
];

export default function VendorsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Vendors</h1>
        <Button>Invite Vendor</Button>
      </div>
      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Products</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((v) => (
                <tr key={v.id} className="border-b last:border-0">
                  <td className="p-4 font-medium">{v.name}</td>
                  <td className="p-4">{v.email}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-sm ${v.status === "Active" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}>
                      {v.status}
                    </span>
                  </td>
                  <td className="p-4">{v.products}</td>
                  <td className="p-4">
                    <Button variant="outline" size="sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
