export function asyncHandler(
  fn: (req: Request) => Promise<Response>
): (req: Request) => Promise<Response> {
  return async (req) => fn(req);
}
