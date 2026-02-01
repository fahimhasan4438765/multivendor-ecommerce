import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AdminLoginPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h1 className="text-2xl font-bold text-center">Admin Login</h1>
        <p className="text-center text-gray-600 text-sm">No public registration. Admins only.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Link href="/forgot-password" className="block text-sm text-slate-600 hover:underline">
          Forgot Password?
        </Link>
        <Button className="w-full">Login</Button>
      </CardContent>
    </Card>
  );
}
