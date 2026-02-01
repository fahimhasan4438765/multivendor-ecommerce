import { createHandler, getHandler } from "./controller";

export const orderRoutes = [
  { method: "POST", path: "/orders", handler: createHandler },
  { method: "GET", path: "/orders", handler: getHandler },
];
