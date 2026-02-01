import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const notifications = [
  { id: 1, msg: "New order #ORD-101", time: "2 min ago", read: false },
  { id: 2, msg: "Vendor A requested payout", time: "1 hour ago", read: true },
];

export default function NotificationsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Notifications</h1>
      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`p-4 flex items-center justify-between ${!n.read ? "bg-blue-50" : ""}`}
              >
                <div>
                  <p className="font-medium">{n.msg}</p>
                  <p className="text-sm text-gray-500">{n.time}</p>
                </div>
                {!n.read && <Button size="sm">Mark Read</Button>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
