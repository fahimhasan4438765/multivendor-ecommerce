import { PlaceholderImage } from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function VendorProfilePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Vendor Profile</h1>
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <PlaceholderImage width={120} height={120} text="Logo" className="rounded-full" />
            <div className="flex-1 space-y-4">
              <Input placeholder="Business Name" />
              <Input placeholder="Contact Email" type="email" />
              <Input placeholder="Phone" />
              <Button>Update Profile</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
