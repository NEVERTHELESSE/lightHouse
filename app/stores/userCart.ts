import { create } from "zustand";
import type { showCartT } from "~/types/productType";
import type { userType } from "~/types/userType";

const userCounterStore = create((set) => ({
  products: [],
  pendingUpload: [],
  user: { email: "neverthelesse" },
  count: 0,
  cart: false,
  items: [],
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  storedProduct: (payload: showCartT[]) =>
    set((state: any) => ({ products: payload })),
  addProduct: (payload: showCartT) =>
    set((state: any) => ({
      products: [...state.products, payload],
      // more: localStorage.setItem(
      //   "carts",
      //   JSON.stringify([...state.products, payload])
      // ),
    })),
  addProducts: (payload: showCartT) =>
    set((state: any) => ({
      items: [...state.items, payload],
    })),
  updateUser: (payload: userType) =>
    set((state: userType) => ({ user: payload })),
  addPendingUpload: (payload: showCartT) =>
    set((state: any) => ({
      pendingUpload: [...state.pendingUpload, payload],
    })),
  showCart: () => set({ cart: true }),
  hideCart: () => set({ cart: false }),
  decrement: () => set((state: any) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
export default userCounterStore;
