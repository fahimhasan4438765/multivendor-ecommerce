import { redis } from "../../infrastructure/redis";

const ORDER_CHANNEL = "order:status";

export function broadcastOrderStatus(orderId: string, status: string) {
  redis.publish(ORDER_CHANNEL, JSON.stringify({ orderId, status }));
}

export function subscribeToOrderStatus(handler: (msg: string) => void) {
  redis.subscribe(ORDER_CHANNEL, handler);
}
