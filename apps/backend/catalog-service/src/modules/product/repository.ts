import type { Product } from "@multivendor/shared-types";
import { db } from "../../infrastructure/db";

export async function findById(id: string): Promise<Product | null> {
  const rows = await db.query<Product>(
    "SELECT * FROM products WHERE id = $1",
    [id]
  );
  return rows[0] ?? null;
}

export async function findByVendor(vendorId: string): Promise<Product[]> {
  return db.query<Product>(
    "SELECT * FROM products WHERE vendor_id = $1",
    [vendorId]
  );
}

export async function create(
  vendorId: string,
  name: string,
  description: string,
  price: number,
  categoryId: string
): Promise<Product> {
  const rows = await db.query<Product>(
    "INSERT INTO products (vendor_id, name, description, price, category_id) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [vendorId, name, description, price, categoryId]
  );
  return rows[0];
}
