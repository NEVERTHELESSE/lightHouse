import { FaEnvelope } from "react-icons/fa";
import CartItems from "./CartItems";
import CheckOutProgress from "./CheckOutProgress";
import CheckOutForm from "./CheckOutForm";
import userCounterStore from "~/stores/userCart";

export default function Checkout() {
  const cartStore = userCounterStore((state: any) => state.products[0]);
  return (
    <main className="py-24 mt-5 flex flex-col justify-center items-center h-screen px-10  ">
      <div className="flex items-center justify-center">
        <CheckOutForm />
        {cartStore ? (
          <CartItems />
        ) : (
          <div className="w-125 p-6">
            <p className="text-3xl">
              No Product in your cart to check out, You can quickly create an
              account before start Shopping{" "}
            </p>
          </div>
        )}
      </div>
      {/* <button className="bg-primary font-bold mt-6 w-max text-white px-8 py-4 rounded-2xl flex ">
        Check Out
      </button> */}
    </main>
  );
}
