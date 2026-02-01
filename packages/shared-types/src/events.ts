export interface BaseEvent {
  type: string;
  timestamp: string;
  correlationId?: string;
}

export interface OrderCreatedEvent extends BaseEvent {
  type: "order.created";
  orderId: string;
  userId: string;
  total: number;
}

export interface PaymentAuthorizedEvent extends BaseEvent {
  type: "payment.authorized";
  orderId: string;
  paymentId: string;
}

export interface PaymentFailedEvent extends BaseEvent {
  type: "payment.failed";
  orderId: string;
  reason: string;
}

export interface InventoryReservedEvent extends BaseEvent {
  type: "inventory.reserved";
  orderId: string;
}

export interface InventoryFailedEvent extends BaseEvent {
  type: "inventory.failed";
  orderId: string;
  reason: string;
}

export interface OrderConfirmedEvent extends BaseEvent {
  type: "order.confirmed";
  orderId: string;
}

export interface OrderCancelledEvent extends BaseEvent {
  type: "order.cancelled";
  orderId: string;
  reason: string;
}

export type DomainEvent =
  | OrderCreatedEvent
  | PaymentAuthorizedEvent
  | PaymentFailedEvent
  | InventoryReservedEvent
  | InventoryFailedEvent
  | OrderConfirmedEvent
  | OrderCancelledEvent;
