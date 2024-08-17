import { Product } from "./Product ";

export interface ProductSize {
    id: number;
    product: Product;  // Liên kết đến Product
    size: string;
    color: string;
    stock: number;
  }