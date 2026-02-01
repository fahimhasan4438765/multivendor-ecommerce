import type { LoginRequest, RegisterRequest } from "@multivendor/shared-types";
import * as service from "./service";

export async function loginHandler(req: Request): Promise<Response> {
  const body = (await req.json()) as LoginRequest;
  const result = await service.login(body);
  return Response.json(result);
}

export async function registerHandler(req: Request): Promise<Response> {
  const body = (await req.json()) as RegisterRequest;
  const result = await service.register(body);
  return Response.json(result);
}
