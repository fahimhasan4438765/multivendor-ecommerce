import { orderRoutes } from "./modules/order/routes";

const routes = [...orderRoutes];

export function handleRequest(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const route = routes.find(
    (r) => r.method === req.method && url.pathname === r.path
  );
  if (route) return route.handler(req);
  return Promise.resolve(Response.json({ error: "Not found" }, { status: 404 }));
}
