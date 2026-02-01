import type { AddItemDto } from "./dto";
import * as repo from "./repository";

export async function getCart(userId: string) {
  const cart = await repo.get(userId);
  return cart ?? { id: crypto.randomUUID(), userId, items: [] };
}

export async function addItem(userId: string, dto: AddItemDto) {
  let cart = await repo.get(userId);
  if (!cart) cart = { id: crypto.randomUUID(), userId, items: [] };
  const existing = cart.items.find((i) => i.productId === dto.productId);
  if (existing) existing.quantity += dto.quantity;
  else cart.items.push({ ...dto });
  await repo.save(cart);
  return cart;
}

export async function clearCart(userId: string) {
  await repo.deleteCart(userId);
  return { success: true };
}
