export interface Product {
  id: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
  stockQuantity: number;
}

export interface ProductDetail {
  category: string;
  id: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
  stockQuantity: number;
  ratings?: [];
  type: string;
}
