import Price from "~/components/Price";
import Rate from "~/components/Rate";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { Discount } from "~/components/Discount";
import userCounterStore from "~/stores/userCart";
import type { productType } from "~/types/productType";

interface propT {
  data: productType[];
  loading: boolean;
}

export default function SearchItem({ data, loading }: propT) {
  const increment = userCounterStore((state: any) => state.increment);
  const showCart = userCounterStore((state: any) => state.showCart);
  const addProduct = userCounterStore((state: any) => state.addProduct);
  const user = userCounterStore((state: any) => state.user);

  function updateCart() {
    addProduct({
      // id: prop.id,
      // src: prop.src,
      // name: prop.name,
      // price: prop.price,
      // quantity: 1,
    });
    increment();
    showCart();
  }

  return (
    <div className="flex   mx-5">
      {data.length == 0 ? (
        "loading"
      ) : (
        <>
          {data.map((pro) => (
            <div
              className="flex max-w-150 bg-red-500  border shadow border-soft"
              key={pro.id}
            >
              <img
                src={pro.files[0]}
                className="size-30 mx-2 object-cover"
                alt=""
              />
              <div className="p-4">
                <h3 className="one w-[40%]">{pro.name}</h3>
                <p className="text-gray-600">
                  {23} X {30} | {8}GB | {256} | {"SSD"}
                </p>
                <div className="flex">
                  <p>142 Available </p>

                  <p className="mx-4">1234 Sold </p>
                  <Rate length={4} />
                </div>
                <Price productPrice={399000} />
                <span className="mx-5"></span>
                <Discount discount={400000} />
              </div>
              <div className="flex px-10 flex-col w-60 justify-around">
                <Link
                  to="wow"
                  // to={`/order?g=${prop.id}`}
                  title="order macbook naw"
                  className="bg-primary hover:bg-tertiary duration-200  w-[50%] sm:w-full py-2  sm:py-3 flex items-center pl-3 text-white font-bold rounded-2xl"
                >
                  Order Now <FaShoppingCart />
                </Link>
                <button
                  // title={`Add ${prop.name} to your cart`}
                  className="bg-secondary flex items-center justify-center w-[40%] sm:w-full py-2 sm:py-3 text-white hover:bg-tertiary font-bold rounded-2xl "
                  onClick={updateCart}
                >
                  Cart <FaShoppingBag className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
