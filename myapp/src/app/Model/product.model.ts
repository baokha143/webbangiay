// product.model.ts
import { category } from "./category.model";
import { account } from "./account.model";
export interface Product{
  id?: number;
  name: string;
  image: string;
  price: number;
  title: string;
  description: string;
  category: category;
  seller: account;
  model: string;
  color: string;
  delivery: string;
  image2?: string;
  image3?: string;
  image4?: string;
  sizes: string[];
  stock: number;
  discount: number;
  averageRating?: number;
  createdAt?: string;
  updatedAt?: string;
}
