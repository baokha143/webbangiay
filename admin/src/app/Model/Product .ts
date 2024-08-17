import { Account } from "./Account";
import { Category } from "./Category ";
import { ProductSize } from "./ProductSize";

export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    title: string;
    description: string;
    category: Category;  // Liên kết đến Category
    seller: Account;     // Liên kết đến Account
    model: string;
    color: string;
    delivery: string;
    image2?: string;
    image3?: string;
    image4?: string;
    sizes: ProductSize[];  // Liên kết đến ProductSize
    discount?: number;
    averageRating?: number;
    createdAt: string;    // Thay đổi từ LocalDateTime sang ISO string
    updatedAt: string;    // Thay đổi từ LocalDateTime sang ISO string
  }