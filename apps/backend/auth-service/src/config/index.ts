export const config = {
  port: parseInt(process.env.PORT ?? "3001"),
  jwtSecret: process.env.JWT_SECRET ?? "dev-secret-change-in-production",
  db: {
    url: process.env.DATABASE_URL ?? "postgresql://localhost:5432/auth",
  },
};
