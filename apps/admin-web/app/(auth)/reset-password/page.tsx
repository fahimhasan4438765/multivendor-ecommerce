import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ResetPasswordPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h1 className="text-2xl font-bold text-center">Reset Password</h1>
        <p className="text-center text-gray-600 text-sm">Enter your new password.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="New Password" type="password" />
        <Input placeholder="Confirm Password" type="password" />
        <Button className="w-full">Reset Password</Button>
        <Link href="/login" className="block text-center text-sm text-slate-600 hover:underline">
          Back to Login
        </Link>
      </CardContent>
    </Card>
  );
}
