import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader><h2 className="font-semibold">Shipping Address</h2></CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Full Name" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Phone" />
              <Input placeholder="Address" />
              <Input placeholder="City" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="State" />
                <Input placeholder="ZIP" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><h2 className="font-semibold">Payment</h2></CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Card Number" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Expiry" />
                <Input placeholder="CVV" />
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader><h2 className="font-semibold">Order Summary</h2></CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between"><span>Subtotal</span><span>$294</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>$0</span></div>
                <div className="flex justify-between font-bold border-t pt-4 mt-4"><span>Total</span><span>$294</span></div>
              </div>
              <Button className="w-full mt-6">Place Order</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
