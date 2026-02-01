const connections = new Map<string, unknown>();

export function addConnection(id: string, ws: unknown) {
  connections.set(id, ws);
}

export function removeConnection(id: string) {
  connections.delete(id);
}

export function findConnectionId(ws: unknown): string | undefined {
  for (const [id, w] of connections) {
    if (w === ws) return id;
  }
  return undefined;
}
