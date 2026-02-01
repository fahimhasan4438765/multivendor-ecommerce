export type OrderStatus =
  | "pending"
  | "confirmed"
  | "cancelled"
  | "payment_failed"
  | "inventory_failed";

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
}
