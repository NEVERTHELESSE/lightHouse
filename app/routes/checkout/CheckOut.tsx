import CartItems from "./CartItems";
import CheckOutForm from "./CheckOutForm";
import userCounterStore from "~/stores/userCart";

export default function Checkout() {
  const cartStore = userCounterStore((state: any) => state.products[0]);
  return (
    <main className="py-24 mt-5 flex flex-col justify-center items-center sm:h-screen px-10  ">
      <div className="sm:flex items-center justify-center">
        <CheckOutForm />
        {cartStore ? (
          <CartItems />
        ) : (
          <div className="w-full sm:w-125 p-6">
            <p className="text-3xl">
              No Product in your cart to check out, You can quickly create an
              account before start Shopping{" "}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
