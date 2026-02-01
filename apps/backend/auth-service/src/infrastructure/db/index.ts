// Placeholder for PostgreSQL client setup
// Uses pg or drizzle when DB is configured
export const db = {
  query: async <T>(_sql: string, _params?: unknown[]): Promise<T[]> => [],
};
