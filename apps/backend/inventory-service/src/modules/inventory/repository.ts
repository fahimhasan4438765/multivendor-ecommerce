import type { InventoryItem } from "@multivendor/shared-types";
import { db } from "../../infrastructure/db";

export async function getStock(productId: string): Promise<InventoryItem | null> {
  const rows = await db.query<InventoryItem>(
    "SELECT * FROM inventory WHERE product_id = $1",
    [productId]
  );
  return rows[0] ?? null;
}

export async function reserve(
  orderId: string,
  productId: string,
  quantity: number
): Promise<boolean> {
  await db.query(
    "UPDATE inventory SET reserved = reserved + $1 WHERE product_id = $2 AND quantity - reserved >= $1",
    [quantity, productId]
  );
  return true;
}

export async function release(orderId: string): Promise<void> {
  await db.query("UPDATE inventory SET reserved = reserved - 1 WHERE reserved > 0");
}
