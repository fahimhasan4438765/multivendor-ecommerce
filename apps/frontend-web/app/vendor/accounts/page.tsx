import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VendorAccountsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Accounts & Payments</h1>
      <Card>
        <CardHeader><h2 className="font-semibold">Payout Settings</h2></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">Configure your payment processing and payout details.</p>
          <div className="space-y-2">
            <p><strong>Available Balance:</strong> $1,250.00</p>
            <p><strong>Pending Payout:</strong> $340.00</p>
          </div>
          <Button>Request Payout</Button>
        </CardContent>
      </Card>
    </div>
  );
}
