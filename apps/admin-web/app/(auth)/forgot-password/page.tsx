import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ForgotPasswordPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
        <p className="text-center text-gray-600 text-sm">Enter your admin email to receive a reset link.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Admin Email" type="email" />
        <Button className="w-full">Send Reset Link</Button>
        <Link href="/login" className="block text-center text-sm text-slate-600 hover:underline">
          Back to Login
        </Link>
      </CardContent>
    </Card>
  );
}
