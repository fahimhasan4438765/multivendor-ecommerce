import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function CommissionSettingsPage() {
  return (
    <div className="p-8">
      <Link href="/settings" className="text-sm text-slate-600 hover:underline mb-4 block">← Back to Settings</Link>
      <h1 className="text-2xl font-bold mb-8">Commission</h1>
      <Card>
        <CardHeader><h2 className="font-semibold">Vendor Commission Rate</h2></CardHeader>
        <CardContent className="space-y-4">
          <Input type="number" placeholder="Commission %" />
          <Button>Save</Button>
        </CardContent>
      </Card>
    </div>
  );
}
