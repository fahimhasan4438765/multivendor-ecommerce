import { processHandler, refundHandler } from "./controller";

export const paymentRoutes = [
  { method: "POST", path: "/payments/process", handler: processHandler },
  { method: "POST", path: "/payments/refund", handler: refundHandler },
];
