import { useEffect } from "react";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import meStore from "~/stores/meStore";
import userCounterStore from "~/stores/userCart";

export default function HeaderUser() {
  const count = userCounterStore((state: any) => state.count);
  const showCart = userCounterStore((state: any) => state.showCart);
  const user = meStore((state: any) => state.user);
  const addProduct = userCounterStore((state: any) => state.storedProduct);

  function showUser() {
    console.log(user);
  }

  useEffect(() => {
    const itemStores = localStorage.getItem("carts");
    if (itemStores) {
      addProduct(JSON.parse(itemStores));
    }
  }, []);

  return (
    <div className="flex ">
      <button className="flex ml-3 items-center" onClick={showUser}>
        <FiUser className=" text-2xl" />
        <p className="ml-2 font-bold hidden md:flex">Account</p>
      </button>
      <button className="flex mx-4 items-center">
        <FiHeart className="text-2xl  " />
        <p className="ml-2 font-bold hidden md:flex">Wishlit</p>
      </button>
      <button
        onClick={showCart}
        className="flex relative justify-center items-center"
      >
        <FiShoppingCart className="text-2xl" />
        <div className="absolute -top-5  size-5 flex items-center justify-center rounded-full p-1 bg-green-400">
          {count}
        </div>
        <p className="ml-5 hidden md:flex font-bold">Carts</p>
      </button>
    </div>
  );
}
