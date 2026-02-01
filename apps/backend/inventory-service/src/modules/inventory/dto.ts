export interface ReserveDto {
  orderId: string;
  items: { productId: string; quantity: number }[];
}

export interface ReleaseDto {
  orderId: string;
}
