import type { Payment } from "@multivendor/shared-types";
import { db } from "../../infrastructure/db";

export async function create(
  orderId: string,
  amount: number,
  status: string
): Promise<Payment> {
  const rows = await db.query<Payment>(
    "INSERT INTO payments (order_id, amount, status) VALUES ($1,$2,$3) RETURNING *",
    [orderId, amount, status]
  );
  return (
    rows[0] ?? {
      id: crypto.randomUUID(),
      orderId,
      amount,
      status: status as Payment["status"],
    }
  );
}
