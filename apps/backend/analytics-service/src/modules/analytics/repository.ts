import type { MetricsDto } from "./dto";
import { db } from "../../infrastructure/db";

export async function getMetrics(): Promise<MetricsDto> {
  const rows = await db.query<{ total_orders: number; total_revenue: number }>(
    "SELECT COUNT(*) as total_orders, COALESCE(SUM(total),0) as total_revenue FROM orders"
  );
  const row = rows[0];
  return {
    totalOrders: row?.total_orders ?? 0,
    totalRevenue: row?.total_revenue ?? 0,
    orderCountByStatus: {},
  };
}
