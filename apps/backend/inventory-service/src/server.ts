import { config } from "./config";
import { logger } from "./shared/logger";
import { handleRequest } from "./app";

Bun.serve({
  port: config.port,
  fetch: async (req) => {
    try {
      return await handleRequest(req);
    } catch (err) {
      logger.error("Request failed", { err });
      return Response.json({ error: "Internal server error" }, { status: 500 });
    }
  },
});

logger.info(`Inventory service running on port ${config.port}`);
