import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const providers = [
  { name: "Pathao", status: "Connected" },
  { name: "DHL", status: "Disconnected" },
  { name: "RedX", status: "Disconnected" },
];

export default function DeliveryPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Delivery Panel</h1>
      <p className="text-gray-600 mb-6">Integrate multiple delivery providers (Pathao, DHL, RedX, etc.)</p>
      <div className="space-y-4">
        {providers.map((p) => (
          <Card key={p.name}>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{p.name}</h3>
                <p className={`text-sm ${p.status === "Connected" ? "text-green-600" : "text-gray-500"}`}>{p.status}</p>
              </div>
              <Button variant={p.status === "Connected" ? "outline" : "default"} size="sm">
                {p.status === "Connected" ? "Configure" : "Connect"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
