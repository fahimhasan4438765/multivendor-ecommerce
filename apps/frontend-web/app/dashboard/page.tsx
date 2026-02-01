import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ShoppingBag, Heart, Package, Settings } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link href="/orders">
          <Card className="hover:shadow-lg transition cursor-pointer">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Orders</h3>
                <p className="text-sm text-gray-600">View order history</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/wishlist">
          <Card className="hover:shadow-lg transition cursor-pointer">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                <Heart className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-semibold">Wishlist</h3>
                <p className="text-sm text-gray-600">Saved items</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/coupons">
          <Card className="hover:shadow-lg transition cursor-pointer">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="font-semibold">Coupons</h3>
                <p className="text-sm text-gray-600">My vouchers</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Card className="hover:shadow-lg transition cursor-pointer">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Settings className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold">Settings</h3>
              <p className="text-sm text-gray-600">Account settings</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader><h2 className="font-semibold">Recent Orders</h2></CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">Your latest orders will appear here.</p>
          <Link href="/orders"><Button>View All Orders</Button></Link>
        </CardContent>
      </Card>
    </div>
  );
}
