import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AdminProfilePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Admin Profile</h1>
      <Card>
        <CardHeader><h2 className="font-semibold">Profile Details</h2></CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Full Name" />
          <Input placeholder="Email" type="email" />
          <Button>Update Profile</Button>
        </CardContent>
      </Card>
    </div>
  );
}
