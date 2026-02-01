export interface Product {
  id: string;
  vendorId: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  parentId?: string;
}
