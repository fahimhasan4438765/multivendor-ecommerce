export interface MetricsDto {
  totalOrders: number;
  totalRevenue: number;
  orderCountByStatus: Record<string, number>;
}
