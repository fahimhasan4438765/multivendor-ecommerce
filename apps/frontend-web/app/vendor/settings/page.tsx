import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function VendorSettingsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <Card>
        <CardHeader><h2 className="font-semibold">Store Settings</h2></CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Store Name" />
          <Input placeholder="Store URL" />
          <Input placeholder="Support Email" type="email" />
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
