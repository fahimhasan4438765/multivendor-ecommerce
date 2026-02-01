import { config } from "./config";
import { logger } from "./shared/logger";
import { routes } from "./modules/gateway/routes";
import { proxy } from "./infrastructure/proxy";

export async function handleRequest(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const route = routes.find(
    (r) => r.method === req.method && url.pathname === r.path
  );
  if (route) {
    try {
      return await proxy(route.upstream, req);
    } catch (err) {
      logger.error("Proxy failed", { err, upstream: route.upstream });
      return Response.json(
        { error: "Upstream service unavailable" },
        { status: 502 }
      );
    }
  }
  if (url.pathname === "/health") {
    return Response.json({ status: "ok", service: "api-gateway" });
  }
  return Response.json({ error: "Not found" }, { status: 404 });
}
