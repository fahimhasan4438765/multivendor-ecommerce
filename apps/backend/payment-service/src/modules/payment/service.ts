import type { ProcessPaymentDto } from "./dto";
import { publish } from "../../infrastructure/messaging";
import * as repo from "./repository";

export async function processPayment(dto: ProcessPaymentDto) {
  const payment = await repo.create(dto.orderId, dto.amount, "authorized");
  await publish("payment.authorized", {
    orderId: dto.orderId,
    paymentId: payment.id,
  });
  return payment;
}

export async function refund(orderId: string) {
  await publish("payment.refunded", { orderId });
  return { success: true };
}
