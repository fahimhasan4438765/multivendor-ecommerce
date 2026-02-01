import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AccountsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Accounts</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader><h2 className="font-semibold">Bank Details</h2></CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Configure platform bank accounts for payouts.</p>
            <Button variant="outline">Manage Banks</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><h2 className="font-semibold">Vendor Payment Requests</h2></CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Review and approve vendor payout requests.</p>
            <Button variant="outline">View Requests</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><h2 className="font-semibold">Invoices</h2></CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">View and manage invoices.</p>
            <Button variant="outline">View Invoices</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
