import * as service from "./service";

export async function listHandler(): Promise<Response> {
  const categories = await service.listCategories();
  return Response.json(categories);
}
