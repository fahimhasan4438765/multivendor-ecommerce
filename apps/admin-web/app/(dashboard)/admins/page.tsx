"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InviteAdminModal } from "@/components/admin/invite-admin-modal";

const admins = [
  { id: 1, name: "Admin One", email: "admin1@topdeal.com", role: "Super Admin" },
  { id: 2, name: "Admin Two", email: "admin2@topdeal.com", role: "Admin" },
];

export default function AdminsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Management</h1>
        <Button onClick={() => setModalOpen(true)}>Invite Admin</Button>
      </div>
      <p className="text-gray-600 mb-6">Only admins can create and invite other admins. No public registration.</p>
      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Role</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {admins.map((a) => (
                <tr key={a.id} className="border-b last:border-0">
                  <td className="p-4 font-medium">{a.name}</td>
                  <td className="p-4">{a.email}</td>
                  <td className="p-4">{a.role}</td>
                  <td className="p-4">
                    <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                    <Button variant="destructive" size="sm">Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
      <InviteAdminModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
