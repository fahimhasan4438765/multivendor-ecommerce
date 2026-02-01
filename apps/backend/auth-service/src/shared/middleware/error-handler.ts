import type { Request, Response } from "bun";
import { AppError } from "../errors";

export function errorHandler(err: unknown, _req: Request, res: Response) {
  if (err instanceof AppError) {
    return Response.json({ error: err.message }, { status: err.statusCode });
  }
  return Response.json({ error: "Internal server error" }, { status: 500 });
}
