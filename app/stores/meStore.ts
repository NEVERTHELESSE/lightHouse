import { create } from "zustand";

const meStore = create((set) => ({
  user: {
    username: "ajibola",
    email: "ajibola@gmail.com",
    phoneNumber: "9051602636",
    address: "oluyole, ibadan",
  },
  changeUser: (payload: any) =>
    set((state: any) => ({
      user: {
        ...state.user,
        ...payload,
      },
    })),

  // addProduct: (payload: showCartT) =>
  //   set((state: any) => ({ products: [...state.products, payload] })),
}));
export default meStore;
