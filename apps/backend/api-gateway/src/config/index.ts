export const config = {
  port: parseInt(process.env.PORT ?? "3000"),
  authServiceUrl: process.env.AUTH_SERVICE_URL ?? "http://localhost:3001",
  catalogServiceUrl: process.env.CATALOG_SERVICE_URL ?? "http://localhost:3002",
  cartServiceUrl: process.env.CART_SERVICE_URL ?? "http://localhost:3003",
  inventoryServiceUrl: process.env.INVENTORY_SERVICE_URL ?? "http://localhost:3004",
  paymentServiceUrl: process.env.PAYMENT_SERVICE_URL ?? "http://localhost:3005",
  orderServiceUrl: process.env.ORDER_SERVICE_URL ?? "http://localhost:3006",
  notificationServiceUrl:
    process.env.NOTIFICATION_SERVICE_URL ?? "http://localhost:3007",
  analyticsServiceUrl:
    process.env.ANALYTICS_SERVICE_URL ?? "http://localhost:3008",
  socketServiceUrl: process.env.SOCKET_SERVICE_URL ?? "http://localhost:3009",
};
