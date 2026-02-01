import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Package, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

const stats = [
  { label: "Total Sales", value: "$12,450", icon: DollarSign, color: "bg-emerald-100 text-emerald-600" },
  { label: "Orders", value: "156", icon: ShoppingCart, color: "bg-blue-100 text-blue-600" },
  { label: "Products", value: "48", icon: Package, color: "bg-purple-100 text-purple-600" },
  { label: "Growth", value: "+12%", icon: TrendingUp, color: "bg-amber-100 text-amber-600" },
];

export default function VendorDashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Vendor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label}>
              <CardContent className="p-6 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg ${s.color} flex items-center justify-center`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{s.label}</p>
                  <p className="text-2xl font-bold">{s.value}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <Card>
        <CardHeader><h2 className="font-semibold">Recent Orders</h2></CardHeader>
        <CardContent>
          <p className="text-gray-600">Recent orders will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
