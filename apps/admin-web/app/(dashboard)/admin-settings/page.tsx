import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AdminSettingsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Admin Settings</h1>
      <Card>
        <CardHeader><h2 className="font-semibold">Preferences</h2></CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Timezone" />
          <Input placeholder="Language" />
          <Button>Save Settings</Button>
        </CardContent>
      </Card>
    </div>
  );
}
