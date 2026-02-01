import { listHandler } from "./controller";

export const categoryRoutes = [
  { method: "GET", path: "/categories", handler: listHandler },
];
