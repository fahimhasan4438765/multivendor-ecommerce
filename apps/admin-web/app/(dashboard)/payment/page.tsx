import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const gateways = [
  { name: "Stripe", for: "Users & Vendors", status: "Active" },
  { name: "PayPal", for: "Users", status: "Inactive" },
  { name: "bKash", for: "Users", status: "Inactive" },
];

export default function PaymentPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Payment Setup</h1>
      <p className="text-gray-600 mb-6">Configure payment gateways for users and vendors.</p>
      <div className="space-y-4">
        {gateways.map((g) => (
          <Card key={g.name}>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{g.name}</h3>
                <p className="text-sm text-gray-600">{g.for}</p>
                <span className={`text-sm ${g.status === "Active" ? "text-green-600" : "text-gray-500"}`}>{g.status}</span>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
