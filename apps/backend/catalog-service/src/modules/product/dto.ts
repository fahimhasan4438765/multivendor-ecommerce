import type { Product } from "@multivendor/shared-types";

export interface CreateProductDto {
  vendorId: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
}

export type { Product };
