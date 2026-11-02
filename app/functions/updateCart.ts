import userCounterStore from "~/stores/userCart";

const increment = userCounterStore((state: any) => state.increment);
const showCart = userCounterStore((state: any) => state.showCart);
const addProduct = userCounterStore((state: any) => state.addProduct);

export function updateCart(
  id: string,
  price: number,
  src: string,
  name: string,
  quantity: number
) {
  addProduct({
    id,
    src,
    name,
    price,
    quantity,
  });
  increment();
  showCart();
}
