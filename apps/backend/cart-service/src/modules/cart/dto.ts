import type { Cart, CartItem } from "@multivendor/shared-types";

export interface AddItemDto {
  productId: string;
  quantity: number;
  price: number;
}

export type { Cart, CartItem };
