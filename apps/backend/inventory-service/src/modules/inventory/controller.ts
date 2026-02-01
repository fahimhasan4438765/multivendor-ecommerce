import type { ReserveDto } from "./dto";
import * as service from "./service";

export async function reserveHandler(req: Request): Promise<Response> {
  const body = (await req.json()) as ReserveDto;
  const result = await service.reserveInventory(body);
  return Response.json(result);
}

export async function releaseHandler(req: Request): Promise<Response> {
  const body = (await req.json()) as { orderId: string };
  await service.releaseInventory(body.orderId);
  return Response.json({ success: true });
}
