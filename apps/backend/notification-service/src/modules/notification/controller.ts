import type { SendNotificationDto } from "./dto";
import * as service from "./service";

export async function sendHandler(req: Request): Promise<Response> {
  const body = (await req.json()) as SendNotificationDto;
  const result = await service.send(body);
  return Response.json(result);
}
