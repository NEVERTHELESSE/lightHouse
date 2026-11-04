import Price from "~/components/Price";
import Rate from "~/components/Rate";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { Discount } from "~/components/Discount";
import userCounterStore from "~/stores/userCart";

export default function SearchItem() {
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

  const { data, error, isPending } = useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      const result = await axios.get(
        // `http://localhost:5173/api/search?id=${user.id}`
        "http://localhost:5173/api/search?id=31"
      );
      console.log(result.data);
      return result.data;
    },
  });

  return (
    <div className="flex w-[40%] border justify-between  border-soft shadow mx-5">
      <div className="flex">
        <img src="/img/laptop1.png" className="size-30 object-cover" alt="" />
        <div className="p-4">
          <h3>DELL LATITUDE 3190 INTEL CELER</h3>
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
  );
}
