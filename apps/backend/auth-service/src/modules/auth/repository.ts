import type { AuthUser } from "@multivendor/shared-types";
import { db } from "../../infrastructure/db";

export async function findByEmail(email: string): Promise<AuthUser | null> {
  const rows = await db.query<AuthUser>(
    "SELECT id, email, role FROM users WHERE email = $1",
    [email]
  );
  return rows[0] ?? null;
}

export async function createUser(
  email: string,
  hashedPassword: string,
  name: string,
  role: string
): Promise<AuthUser> {
  const rows = await db.query<AuthUser>(
    "INSERT INTO users (email, password_hash, name, role) VALUES ($1, $2, $3, $4) RETURNING id, email, role",
    [email, hashedPassword, name, role]
  );
  return (
    rows[0] ?? {
      id: crypto.randomUUID(),
      email,
      role: role as AuthUser["role"],
    }
  );
}

export async function verifyPassword(
  _email: string,
  _password: string
): Promise<boolean> {
  // Placeholder - implement bcrypt verify
  return true;
}
