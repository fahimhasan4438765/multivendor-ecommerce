import Link from "next/link";
import { PlaceholderImage } from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const cartItems = [
  { id: 1, name: "Product One", price: 86, qty: 2 },
  { id: 2, name: "Product Two", price: 122, qty: 1 },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
              <PlaceholderImage width={120} height={120} text={item.name} className="rounded" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-primary font-bold">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Input type="number" defaultValue={item.qty} className="w-16" />
                  <Button variant="destructive" size="sm">Remove</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>$0</span></div>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-4">
            <span>Total</span><span>${subtotal}</span>
          </div>
          <Link href="/checkout">
            <Button className="w-full mt-4">Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
