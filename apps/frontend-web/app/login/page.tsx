import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-12 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">Sign In</h1>
          <p className="text-center text-gray-600">Login to your account</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Link href="/forgot-password" className="block text-sm text-primary hover:underline">Forgot Password?</Link>
          <Button className="w-full">Login</Button>
          <p className="text-center text-sm">
            New here? <Link href="/register" className="text-primary font-medium hover:underline">Create an account</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
