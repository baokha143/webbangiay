import { Product } from "./product.model";

export interface ProductSize {
  id: number;
  product: Product;
  size: string;
  stock: number;
}
