import type { CreateProductDto } from "./dto";
import { NotFoundError } from "../../shared/errors";
import * as repo from "./repository";

export async function getProduct(id: string) {
  const product = await repo.findById(id);
  if (!product) throw new NotFoundError("Product not found");
  return product;
}

export async function getProductsByVendor(vendorId: string) {
  return repo.findByVendor(vendorId);
}

export async function createProduct(dto: CreateProductDto) {
  return repo.create(
    dto.vendorId,
    dto.name,
    dto.description,
    dto.price,
    dto.categoryId
  );
}
