import type { ReserveDto } from "./dto";
import { publish } from "../../infrastructure/messaging";
import * as repo from "./repository";

export async function reserveInventory(dto: ReserveDto) {
  for (const item of dto.items) {
    const stock = await repo.getStock(item.productId);
    if (!stock || stock.quantity - stock.reserved < item.quantity) {
      await publish("inventory.failed", {
        orderId: dto.orderId,
        reason: "Insufficient stock",
      });
      return { success: false };
    }
    await repo.reserve(dto.orderId, item.productId, item.quantity);
  }
  await publish("inventory.reserved", { orderId: dto.orderId });
  return { success: true };
}

export async function releaseInventory(orderId: string) {
  await repo.release(orderId);
}
