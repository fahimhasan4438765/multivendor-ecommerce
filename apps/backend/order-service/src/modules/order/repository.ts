import type { Order } from "@multivendor/shared-types";
import { db } from "../../infrastructure/db";

export async function create(
  userId: string,
  items: Order["items"],
  total: number,
  status: Order["status"]
): Promise<Order> {
  const rows = await db.query<Order>(
    "INSERT INTO orders (user_id, items, total, status) VALUES ($1,$2,$3,$4) RETURNING *",
    [userId, JSON.stringify(items), total, status]
  );
  return (
    rows[0] ?? {
      id: crypto.randomUUID(),
      userId,
      items,
      total,
      status,
    }
  );
}

export async function findById(id: string): Promise<Order | null> {
  const rows = await db.query<Order>("SELECT * FROM orders WHERE id = $1", [
    id,
  ]);
  return rows[0] ?? null;
}

export async function updateStatus(
  id: string,
  status: Order["status"]
): Promise<void> {
  await db.query("UPDATE orders SET status = $1 WHERE id = $2", [status, id]);
}
