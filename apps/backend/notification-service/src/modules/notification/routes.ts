import { sendHandler } from "./controller";

export const notificationRoutes = [
  { method: "POST", path: "/notifications/send", handler: sendHandler },
];
