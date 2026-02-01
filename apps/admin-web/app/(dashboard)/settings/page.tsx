import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const settingSections = [
  { href: "/settings/commission", label: "Commission" },
  { href: "/settings/offers", label: "Offers" },
  { href: "/settings/coupons", label: "Coupons" },
  { href: "/settings/site", label: "Site Settings" },
  { href: "/settings/theme", label: "Theming & Design" },
];

export default function SettingsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {settingSections.map((s) => (
          <Link key={s.href} href={s.href}>
            <Card className="hover:shadow-md transition">
              <CardContent className="p-6 flex items-center justify-between">
                <span className="font-medium">{s.label}</span>
                <span className="text-gray-500">→</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
