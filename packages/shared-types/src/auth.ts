export interface AuthUser {
  id: string;
  email: string;
  role: "customer" | "vendor" | "admin";
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  name: string;
  role?: "customer" | "vendor";
}

export interface TokenPayload extends AuthUser {
  iat: number;
  exp: number;
}
