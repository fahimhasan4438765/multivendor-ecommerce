export const config = {
  port: parseInt(process.env.PORT ?? "3002"),
  db: { url: process.env.DATABASE_URL ?? "postgresql://localhost:5432/catalog" },
};
