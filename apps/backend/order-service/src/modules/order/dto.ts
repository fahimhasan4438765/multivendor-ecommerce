import type { Order, OrderItem } from "@multivendor/shared-types";

export interface CreateOrderDto {
  userId: string;
  items: OrderItem[];
  total: number;
}

export type { Order, OrderItem };
