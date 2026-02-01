import * as service from "./service";

export async function getMetricsHandler(): Promise<Response> {
  const metrics = await service.getMetrics();
  return Response.json(metrics);
}
