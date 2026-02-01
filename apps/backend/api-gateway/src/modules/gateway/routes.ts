import { config } from "../../config";
import { proxy } from "../../infrastructure/proxy";

export const routes: { method: string; path: string; upstream: string }[] = [
  { method: "POST", path: "/auth/login", upstream: config.authServiceUrl + "/auth/login" },
  { method: "POST", path: "/auth/register", upstream: config.authServiceUrl + "/auth/register" },
  { method: "GET", path: "/products", upstream: config.catalogServiceUrl + "/products" },
  { method: "GET", path: "/products/vendor", upstream: config.catalogServiceUrl + "/products/vendor" },
  { method: "POST", path: "/products", upstream: config.catalogServiceUrl + "/products" },
  { method: "GET", path: "/categories", upstream: config.catalogServiceUrl + "/categories" },
  { method: "GET", path: "/cart", upstream: config.cartServiceUrl + "/cart" },
  { method: "POST", path: "/cart/items", upstream: config.cartServiceUrl + "/cart/items" },
  { method: "DELETE", path: "/cart", upstream: config.cartServiceUrl + "/cart" },
  { method: "POST", path: "/inventory/reserve", upstream: config.inventoryServiceUrl + "/inventory/reserve" },
  { method: "POST", path: "/inventory/release", upstream: config.inventoryServiceUrl + "/inventory/release" },
  { method: "POST", path: "/payments/process", upstream: config.paymentServiceUrl + "/payments/process" },
  { method: "POST", path: "/payments/refund", upstream: config.paymentServiceUrl + "/payments/refund" },
  { method: "POST", path: "/orders", upstream: config.orderServiceUrl + "/orders" },
  { method: "GET", path: "/orders", upstream: config.orderServiceUrl + "/orders" },
  { method: "POST", path: "/notifications/send", upstream: config.notificationServiceUrl + "/notifications/send" },
  { method: "GET", path: "/analytics/metrics", upstream: config.analyticsServiceUrl + "/analytics/metrics" },
];
