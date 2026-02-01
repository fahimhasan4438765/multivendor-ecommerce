import type { Category } from "@multivendor/shared-types";
import { db } from "../../infrastructure/db";

export async function findAll(): Promise<Category[]> {
  return db.query<Category>("SELECT * FROM categories");
}

export async function findById(id: string): Promise<Category | null> {
  const rows = await db.query<Category>(
    "SELECT * FROM categories WHERE id = $1",
    [id]
  );
  return rows[0] ?? null;
}
