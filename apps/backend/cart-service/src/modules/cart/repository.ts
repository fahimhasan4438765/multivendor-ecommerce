import type { Cart } from "@multivendor/shared-types";
import { redis } from "../../infrastructure/redis";

const CART_PREFIX = "cart:";

export async function get(userId: string): Promise<Cart | null> {
  const data = await redis.get(`${CART_PREFIX}${userId}`);
  return data ? (JSON.parse(data) as Cart) : null;
}

export async function save(cart: Cart): Promise<void> {
  await redis.set(`${CART_PREFIX}${cart.userId}`, JSON.stringify(cart));
}

export async function deleteCart(userId: string): Promise<void> {
  await redis.del(`${CART_PREFIX}${userId}`);
}
