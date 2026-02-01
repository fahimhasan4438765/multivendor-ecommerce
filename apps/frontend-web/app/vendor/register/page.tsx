import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function VendorRegisterPage() {
  return (
    <div className="container mx-auto px-4 py-12 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">Become a Vendor</h1>
          <p className="text-center text-gray-600">Register your vendor account</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Business Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Phone" />
          <Button className="w-full">Register</Button>
          <p className="text-center text-sm">
            Already a vendor? <Link href="/vendor/login" className="text-primary font-medium hover:underline">Sign in</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
