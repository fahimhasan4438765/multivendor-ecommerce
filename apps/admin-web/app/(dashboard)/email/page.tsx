import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EmailPanelPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Admin Email Panel</h1>
      <Card>
        <CardHeader><h2 className="font-semibold">Send Email</h2></CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="To" />
          <Input placeholder="Subject" />
          <textarea className="w-full min-h-[200px] border rounded px-3 py-2 text-sm" placeholder="Message..." />
          <Button>Send</Button>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader><h2 className="font-semibold">Email Templates</h2></CardHeader>
        <CardContent>
          <p className="text-gray-600">Manage email templates for notifications, invites, etc.</p>
        </CardContent>
      </Card>
    </div>
  );
}
