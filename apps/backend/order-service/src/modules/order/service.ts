import type { CreateOrderDto } from "./dto";
import { config } from "../../config";
import { publish } from "../../infrastructure/messaging";
import * as repo from "./repository";

export async function createOrder(dto: CreateOrderDto) {
  const order = await repo.create(
    dto.userId,
    dto.items,
    dto.total,
    "pending"
  );
  await publish("order.created", {
    orderId: order.id,
    userId: order.userId,
    total: order.total,
  });
  const payRes = await fetch(`${config.paymentServiceUrl}/payments/process`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderId: order.id,
      amount: order.total,
    }),
  });
  if (!payRes.ok) {
    await repo.updateStatus(order.id, "payment_failed");
    await publish("order.cancelled", { orderId: order.id, reason: "Payment failed" });
    return order;
  }
  const invRes = await fetch(`${config.inventoryServiceUrl}/inventory/reserve`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderId: order.id,
      items: dto.items.map((i) => ({ productId: i.productId, quantity: i.quantity })),
    }),
  });
  if (!invRes.ok) {
    await repo.updateStatus(order.id, "inventory_failed");
    await fetch(`${config.paymentServiceUrl}/payments/refund`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId: order.id }),
    });
    await publish("order.cancelled", { orderId: order.id, reason: "Inventory failed" });
    return order;
  }
  await repo.updateStatus(order.id, "confirmed");
  await publish("order.confirmed", { orderId: order.id });
  return order;
}

export async function getOrder(id: string) {
  const order = await repo.findById(id);
  if (!order) throw new Error("Order not found");
  return order;
}
