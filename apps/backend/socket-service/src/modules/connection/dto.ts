export interface OrderStatusMessage {
  type: "order.status";
  orderId: string;
  status: string;
}
