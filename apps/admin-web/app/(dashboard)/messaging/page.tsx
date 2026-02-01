import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const conversations = [
  { id: 1, with: "Vendor A", preview: "Regarding order #101...", unread: 2 },
  { id: 2, with: "Customer John", preview: "Refund request...", unread: 0 },
];

export default function MessagingPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Messaging</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader><h2 className="font-semibold">Conversations</h2></CardHeader>
          <CardContent className="p-0">
            {conversations.map((c) => (
              <div key={c.id} className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                <p className="font-medium">{c.with}</p>
                <p className="text-sm text-gray-500 truncate">{c.preview}</p>
                {c.unread > 0 && (
                  <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded">{c.unread}</span>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader><h2 className="font-semibold">Chat</h2></CardHeader>
          <CardContent>
            <p className="text-gray-500 text-center py-12">Select a conversation</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
