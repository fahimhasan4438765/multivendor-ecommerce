export async function proxy(upstreamUrl: string, req: Request): Promise<Response> {
  const url = new URL(req.url);
  const target = new URL(upstreamUrl);
  target.search = url.search;
  const headers = new Headers(req.headers);
  headers.delete("host");
  const res = await fetch(target.toString(), {
    method: req.method,
    headers,
    body: req.method !== "GET" && req.method !== "HEAD" ? req.body : undefined,
  });
  return new Response(res.body, {
    status: res.status,
    headers: res.headers,
  });
}
