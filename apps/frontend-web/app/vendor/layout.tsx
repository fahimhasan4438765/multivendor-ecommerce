import { VendorLayoutClient } from "./layout-client";

export default function VendorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <VendorLayoutClient>{children}</VendorLayoutClient>;
}
