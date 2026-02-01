"use client";

import { usePathname } from "next/navigation";
import { VendorSidebar } from "@/components/layout/vendor-sidebar";

export function VendorLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/vendor/login" || pathname === "/vendor/register";

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen">
      <VendorSidebar />
      <div className="flex-1 bg-gray-50">{children}</div>
    </div>
  );
}
