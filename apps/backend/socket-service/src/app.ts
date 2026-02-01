import { config } from "./config";
import { logger } from "./shared/logger";
import * as conn from "./modules/connection/repository";

Bun.serve({
  port: config.port,
  fetch(req, server) {
    if (server.upgrade(req)) return;
    return new Response("Socket service", { status: 200 });
  },
  websocket: {
    open(ws) {
      const id = crypto.randomUUID();
      conn.addConnection(id, ws);
      logger.info("Client connected", { id });
    },
    message(ws, data) {
      ws.send(data);
    },
    close(ws) {
      const id = conn.findConnectionId(ws);
      if (id) conn.removeConnection(id);
      logger.info("Client disconnected", { id });
    },
  },
});

logger.info(`Socket service running on port ${config.port}`);
