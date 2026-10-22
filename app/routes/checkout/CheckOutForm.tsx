import axios from "axios";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaEnvelope, FaKey, FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { userInformation } from "~/data/userInfo";
import { calculateTotal } from "~/functions/calculateTotal";
import CircularLoading from "~/loading/CircularLoading";
import userCounterStore from "~/stores/userCart";
import SigninMethod from "./SIgninMethod";
import { toast } from "react-toastify";
import { supabase } from "~/lib/subase";

export default function CheckOutForm() {
  const api = import.meta.env.VITE_API;
  const [userInfo, setUserInfo] = useState(userInformation);
  const cartStore = userCounterStore((state: any) => state.products[0]);
  const [isLoading, setIsLoading] = useState(false);
  const products = userCounterStore((state: any) => state.products);

  async function placeOrder(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    if (cartStore) {
      const totalAmount = calculateTotal(products);
      const { id, title, src } = cartStore;
      await axios
        .post(`${api}payment`, {
          id,
          title,
          price: totalAmount,
          src: src,
          userInfo,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            const url = res.data.url;
            window.location.href = url;
          } else {
            setIsLoading(false);
            toast("There was an error while processing payment");
          }
        });
    } else {
      toast("no cart store");
      setIsLoading(false);
    }
    // const { data, error } = await supabase
    //   .from("users")
    //   .insert(userInfo)
    //   .select("*");
    // if (error) {
    //   toast("hello", { type: "error" });
    //   console.log(error);
    // } else {

    //   toast("user added", { type: "success" });
    //   console.log(data);
    // }
  }
  async function createAccount(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  const inputStyleParent =
    "flex w-full items-center hadow-lg  border my-3 border-gray-300 relative rounded-2xl";
  const inputStyle = "w-full ml-7 h-full p-6  focus:outline-0";
  const inputIcon = "text-gray-400 absolute left-3";
  return (
    <div className="rounded-2xl border sm:w-125 sm:p-0 sm:h-155 text-center border-gray-200 shadow p-6">
      <h3 className="text-2xl font-bold ">
        Fill the field to continue with your checkout
      </h3>
      <p className="text-gray-500">It takes less than 2 Minutes</p>
      <form
        action="post"
        className="flex px-4 flex-col "
        onSubmit={cartStore ? placeOrder : createAccount}
      >
        <div className={inputStyleParent}>
          <FaUser className={inputIcon} />
          <input
            type="text"
            minLength={3}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserInfo((prev) => ({ ...prev, fullName: e.target.value }))
            }
            required
            placeholder="Full Name *"
            className={inputStyle}
          />
        </div>
        <div className={inputStyleParent}>
          <FaEnvelope className={inputIcon} />
          <input
            type="email"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserInfo((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Email Address *"
            className={inputStyle}
          />
        </div>
        <div className={inputStyleParent}>
          <FaPhoneAlt className={inputIcon} />
          <div className="size-10 absolute right-2  bg-white"></div>
          <p className="ml-10 -mr-8">+234</p>
          <input
            type="number"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserInfo((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
            minLength={10}
            placeholder="Phone Number *"
            className={inputStyle}
          />
        </div>
        <div className={inputStyleParent}>
          <FaHouse className={inputIcon} />
          <input
            type="text"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserInfo((prev) => ({ ...prev, address: e.target.value }))
            }
            minLength={10}
            placeholder="Drop off Address *"
            className={inputStyle}
          />
        </div>
        <div className={inputStyleParent}>
          <FaKey className={inputIcon} />
          <input
            type="password"
            minLength={6}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserInfo((prev) => ({ ...prev, password: e.target.value }))
            }
            required
            placeholder="Password *"
            className={inputStyle}
          />
        </div>

        {cartStore ? (
          <>
            {isLoading ? (
              <div className="bg-soft flex items-center justify-center cursor-not-allowed rounded-2xl p-4 text-white mt-2 font-bold">
                Loading <CircularLoading />
              </div>
            ) : (
              <button
                className="bg-primary rounded-2xl p-4 text-white mt-2 font-bold"
                type="submit"
              >
                Place Order
              </button>
            )}
          </>
        ) : (
          <button
            className="bg-primary rounded-2xl p-4 text-white mt-2 font-bold"
            type="submit"
          >
            Create account
          </button>
        )}
      </form>
      <SigninMethod />
    </div>
  );
}
