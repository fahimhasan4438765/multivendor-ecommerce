export const config = {
  port: parseInt(process.env.PORT ?? "3006"),
  db: { url: process.env.DATABASE_URL ?? "postgresql://localhost:5432/order" },
  paymentServiceUrl: process.env.PAYMENT_SERVICE_URL ?? "http://localhost:3005",
  inventoryServiceUrl:
    process.env.INVENTORY_SERVICE_URL ?? "http://localhost:3004",
};
