import type { LoginRequest, RegisterRequest, TokenPayload } from "@multivendor/shared-types";
import { SignJWT } from "jose";
import { UnauthorizedError } from "../../shared/errors";
import * as repo from "./repository";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "dev-secret-change-in-production"
);
const EXPIRES_IN = 3600;

export async function login(req: LoginRequest) {
  const user = await repo.findByEmail(req.email);
  if (!user) throw new UnauthorizedError("Invalid credentials");
  const valid = await repo.verifyPassword(req.email, req.password);
  if (!valid) throw new UnauthorizedError("Invalid credentials");
  return { accessToken: await signToken(user), expiresIn: EXPIRES_IN };
}

export async function register(req: RegisterRequest) {
  const existing = await repo.findByEmail(req.email);
  if (existing) throw new UnauthorizedError("Email already registered");
  const hashed = await Bun.password.hash(req.password, { algorithm: "bcrypt" });
  const user = await repo.createUser(
    req.email,
    hashed,
    req.name,
    req.role ?? "customer"
  );
  return { accessToken: await signToken(user), expiresIn: EXPIRES_IN };
}

async function signToken(user: { id: string; email: string; role: string }) {
  const payload: Omit<TokenPayload, "iat" | "exp"> = user;
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${EXPIRES_IN}s`)
    .sign(JWT_SECRET);
}
