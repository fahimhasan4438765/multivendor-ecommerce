import type { LoginRequest, RegisterRequest } from "@multivendor/shared-types";

export type { LoginRequest, RegisterRequest };

export interface TokenResponse {
  accessToken: string;
  expiresIn: number;
}
