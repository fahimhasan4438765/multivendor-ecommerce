import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader><h2 className="font-semibold">Send a Message</h2></CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Your Name" />
            <Input placeholder="Email" type="email" />
            <textarea className="w-full min-h-[120px] rounded-md border px-3 py-2" placeholder="Message" />
            <Button className="w-full">Send</Button>
          </CardContent>
        </Card>
        <div>
          <h2 className="font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">We are here to help. Reach out anytime.</p>
          <p>Email: support@topdeal.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
    </div>
  );
}
