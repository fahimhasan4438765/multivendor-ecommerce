import type { CreateProductDto } from "./dto";
import * as service from "./service";

export async function getProductHandler(req: Request): Promise<Response> {
  const id = new URL(req.url).searchParams.get("id") ?? "";
  const product = await service.getProduct(id);
  return Response.json(product);
}

export async function getByVendorHandler(req: Request): Promise<Response> {
  const vendorId = new URL(req.url).searchParams.get("vendorId") ?? "";
  const products = await service.getProductsByVendor(vendorId);
  return Response.json(products);
}

export async function createProductHandler(req: Request): Promise<Response> {
  const body = (await req.json()) as CreateProductDto;
  const product = await service.createProduct(body);
  return Response.json(product, { status: 201 });
}
