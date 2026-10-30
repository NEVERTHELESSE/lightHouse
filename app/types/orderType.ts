import type { productType } from "./productType";

export type orderType = {
  id: string;
  orderId: string;
  orderInfo: {
    id: string;
    src: string;
    price: number;
    quantity: number;
  }[];
  userInfo: {
    email: string;
    address: string;
    fullName: string;
    phoneNumber: string;
  };
  created_at: string;
};
