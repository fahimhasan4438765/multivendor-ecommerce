import type { ProcessPaymentDto } from "./dto";
import * as service from "./service";

export async function processHandler(req: Request): Promise<Response> {
  const body = (await req.json()) as ProcessPaymentDto;
  const payment = await service.processPayment(body);
  return Response.json(payment, { status: 201 });
}

export async function refundHandler(req: Request): Promise<Response> {
  const body = (await req.json()) as { orderId: string };
  const result = await service.refund(body.orderId);
  return Response.json(result);
}
