import { create } from "zustand";
import type { showCartT } from "~/types/productType";

const userCounterStore = create((set) => ({
  products: [],
  count: 0,
  cart: false,

  increment: () => set((state: any) => ({ count: state.count + 1 })),
  storedProduct: (payload: showCartT[]) =>
    set((state: any) => ({ products: payload })),
  addProduct: (payload: showCartT) =>
    set((state: any) => ({
      products: [...state.products, payload],
      // more: localStorage.setItem("carts", `${[...state.products, payload]}`),
      more: localStorage.setItem(
        "carts",
        JSON.stringify([...state.products, payload])
      ),
    })),
  // localStorage.setItem('carts',`${[...state.products]}`)
  // ),
  showCart: () => set({ cart: true }),
  hideCart: () => set({ cart: false }),
  decrement: () => set((state: any) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
export default userCounterStore;
