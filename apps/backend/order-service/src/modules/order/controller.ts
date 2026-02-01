import type { CreateOrderDto } from "./dto";
import * as service from "./service";

export async function createHandler(req: Request): Promise<Response> {
  const body = (await req.json()) as CreateOrderDto;
  const order = await service.createOrder(body);
  return Response.json(order, { status: 201 });
}

export async function getHandler(req: Request): Promise<Response> {
  const id = new URL(req.url).searchParams.get("id") ?? "";
  const order = await service.getOrder(id);
  return Response.json(order);
}
