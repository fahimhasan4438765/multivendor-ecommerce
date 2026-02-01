export const config = {
  port: parseInt(process.env.PORT ?? "3004"),
  db: { url: process.env.DATABASE_URL ?? "postgresql://localhost:5432/inventory" },
};
