export interface Account {
  uid: number;
  username: string;
  password?: string;
  isSell: boolean;
  isAdmin: boolean;
  email: string;
  profileImage?: string;  // URL hoặc base64 của ảnh thẻ
  selected?: boolean;  // Để quản lý việc chọn checkbox
  createdAt?: Date;
  updatedAt?: Date;
}
