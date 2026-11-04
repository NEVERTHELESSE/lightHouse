import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router";
import { api } from "~/api/api";
import userCounterStore from "~/stores/userCart";
const ShowCart = lazy(() => import("./ShowCart"));
import { Suspense, lazy } from "react";
export default function HeaderUser() {
  const count = userCounterStore((state: any) => state.count);
  const showCart = userCounterStore((state: any) => state.showCart);
  const addProduct = userCounterStore((state: any) => state.storedProduct);
  const user = userCounterStore((state: any) => state.user);
  const changeuser = userCounterStore((state: any) => state.updateUser);

  useEffect(() => {
    const itemStores = localStorage.getItem("carts");
    if (itemStores) {
      addProduct(JSON.parse(itemStores));
    }
  }, []);

  const { data, error, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const result = await api.get("token");
      result.data.message.id && changeuser(result.data.message);
      return await result.data.message;
    },
  });
  const active = userCounterStore((state: any) => state.cart);

  return (
    <div className="flex ">
      {active && (
        <Suspense fallback="loading">
          <ShowCart />
        </Suspense>
      )}
      <>
        <button className="flex mx-6 items-center">
          <FiHeart className="text-2xl  " />
          <p className="ml-2 font-bold hidden md:flex">Wishlit</p>
        </button>
        <button
          onClick={showCart}
          className="flex relative justify-center items-center"
        >
          <FiShoppingCart className="text-2xl ml-2" />
          {count !== 0 && (
            <div className="absolute -top-4 right-0 size-5 flex items-center justify-center rounded-full p-1 bg-green-400">
              {count}
            </div>
          )}
          <p className="hidden md:flex font-bold">Carts</p>
        </button>
      </>

      {error ? (
        "error"
      ) : (
        <>
          {isPending ? (
            "loading "
          ) : (
            <>
              {data.id ? (
                <Link to="/account" className="flex ml-3 items-center">
                  <img
                    src={data.profilePics}
                    title={data.fullName}
                    className="size-10 rounded-full object-cover"
                    alt=""
                  />
                </Link>
              ) : (
                <Link to={`/signup`} className="flex ml-3 items-center">
                  <FiUser className=" text-2xl" />
                  <p className="ml-2 font-bold hidden md:flex">SignUp</p>
                </Link>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
