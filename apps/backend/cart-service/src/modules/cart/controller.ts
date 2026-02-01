import type { AddItemDto } from "./dto";
import * as service from "./service";

export async function getCartHandler(req: Request): Promise<Response> {
  const userId = req.headers.get("x-user-id") ?? "";
  const cart = await service.getCart(userId);
  return Response.json(cart);
}

export async function addItemHandler(req: Request): Promise<Response> {
  const userId = req.headers.get("x-user-id") ?? "";
  const body = (await req.json()) as AddItemDto;
  const cart = await service.addItem(userId, body);
  return Response.json(cart);
}

export async function clearHandler(req: Request): Promise<Response> {
  const userId = req.headers.get("x-user-id") ?? "";
  await service.clearCart(userId);
  return Response.json({ success: true });
}
