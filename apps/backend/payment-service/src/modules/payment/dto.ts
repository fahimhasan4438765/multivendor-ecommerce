import type { Payment } from "@multivendor/shared-types";

export interface ProcessPaymentDto {
  orderId: string;
  amount: number;
  idempotencyKey?: string;
}

export type { Payment };
