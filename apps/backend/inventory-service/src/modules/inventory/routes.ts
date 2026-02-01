import { reserveHandler, releaseHandler } from "./controller";

export const inventoryRoutes = [
  { method: "POST", path: "/inventory/reserve", handler: reserveHandler },
  { method: "POST", path: "/inventory/release", handler: releaseHandler },
];
