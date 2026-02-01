export const config = {
  port: parseInt(process.env.PORT ?? "3003"),
  redis: { url: process.env.REDIS_URL ?? "redis://localhost:6379" },
};
