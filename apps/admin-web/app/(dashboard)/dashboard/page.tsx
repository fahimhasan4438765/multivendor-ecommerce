import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DollarSign, ShoppingCart, Store, Users } from "lucide-react";

const stats = [
  { label: "Total Revenue", value: "$45,230", icon: DollarSign },
  { label: "Orders", value: "1,234", icon: ShoppingCart },
  { label: "Vendors", value: "48", icon: Store },
  { label: "Customers", value: "12,450", icon: Users },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label}>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-slate-600" />
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
        <CardHeader>
          <h2 className="text-lg font-semibold">Recent Activity</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Recent orders and activity will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
