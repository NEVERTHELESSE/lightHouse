import { Link } from "react-router";
import userCounterStore from "~/stores/userCart";

export default function ContinueShopping() {
  const hideCart = userCounterStore((state: any) => state.hideCart);

  return (
    <div className="flex flex-col justify-center  items-center p-4 h-[80vh]">
      <h3 className="my-5 text-2xl text-red-500 font-bold">
        There's no gadget in your cart
      </h3>
      <img src="/noitem.png" alt="no product in cart" />

      <Link
        onClick={hideCart}
        className="bg-primary rounded-lg px-8 py-4 text-white"
        to="/products"
      >
        Start Shopping
      </Link>
    </div>
  );
}
