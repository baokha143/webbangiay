export interface Review {
  maReview: number;
  account: {
    accountID: number;
    username: string;
  };
  product: {
    productID: number;
    name: string;
  };
  contentReview: string;
  dateReview: string;
  updatedAt: string;
}
