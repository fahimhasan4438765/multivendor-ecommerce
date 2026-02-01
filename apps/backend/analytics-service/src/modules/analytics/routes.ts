import { getMetricsHandler } from "./controller";

export const analyticsRoutes = [
  { method: "GET", path: "/analytics/metrics", handler: getMetricsHandler },
];
