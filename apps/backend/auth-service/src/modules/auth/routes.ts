import { loginHandler, registerHandler } from "./controller";

export const authRoutes = [
  { method: "POST", path: "/auth/login", handler: loginHandler },
  { method: "POST", path: "/auth/register", handler: registerHandler },
];
