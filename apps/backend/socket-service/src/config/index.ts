export const config = {
  port: parseInt(process.env.PORT ?? "3009"),
  redis: { url: process.env.REDIS_URL ?? "redis://localhost:6379" },
};
