export type PaymentStatus = "pending" | "authorized" | "failed" | "refunded";

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  status: PaymentStatus;
}
