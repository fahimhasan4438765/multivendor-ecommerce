import { productRoutes } from "./modules/product/routes";
import { categoryRoutes } from "./modules/category/routes";

const routes = [...productRoutes, ...categoryRoutes];

function matchRoute(method: string, pathname: string) {
  return routes.find((r) => r.method === method && pathname === r.path);
}

export function handleRequest(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const route = matchRoute(req.method, url.pathname);
  if (route) return route.handler(req);
  return Promise.resolve(
    Response.json({ error: "Not found" }, { status: 404 })
  );
}
