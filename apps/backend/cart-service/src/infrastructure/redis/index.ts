// Ephemeral cart storage - Redis client placeholder
export const redis = {
  get: async (_key: string) => null as string | null,
  set: async (_key: string, _val: string) => {},
  del: async (_key: string) => {},
};
