import { FaShoppingBag, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router";
// import converter from "number-to-words";
import userCounterStore from "~/stores/userCart";
import type { productType, topPicksType } from "~/types/productType";
import Price from "~/components/Price";

export default function Items(prop: productType) {
  const lists = [1, 2, 3, 4, 5];
  const increment = userCounterStore((state: any) => state.increment);
  const showCart = userCounterStore((state: any) => state.showCart);
  const addProduct = userCounterStore((state: any) => state.addProduct);

  function updateCart() {
    addProduct({
      id: prop.id,
      src: prop.src,
      name: prop.name,
      price: prop.price,
      quantity: 1,
    });
    increment();
    showCart();
  }

  return (
    <div
      // title={converter.toWords(prop.price).toUpperCase() + " NAIRA"}
      key={prop.id}
      className="rounded-2xl bg-white my-2 w-full md:w-[calc(100%/2.3)] lg:w-[calc(100%/4.2)] shadow-lg box  overflow-hidden"
    >
      <Link prefetch="intent" to={`/product?s=${prop.id}`}>
        <img
          src={prop.src}
          alt="load"
          className=" object-contain w-full h-70 shadow-lg "
        />
      </Link>

      <div className="px-3 py-2 ">
        <h3 className="font-bold uppercase sm:text-2xl one w-full">
          {prop.name}
        </h3>
        <p className="text-gray-600">
          {prop.width} X {prop.height} | {prop.ram}GB | {prop.size} |{" "}
          {prop.drive}
        </p>
        <div className="flex w-max">
          {lists.map((list) => (
            <FaStar className="text-primary mr-1 " key={list} />
          ))}
        </div>
        <div className="flex my-2 items-center justify-between">
          <h4
            className="font-bold text-2xl "
            title="Seven Hundred and Eighty Five Thousand"
          >
            <Price productPrice={prop.price} />
          </h4>
          <s className="text-gray-500">
            <i>{<Price productPrice={prop.discount} />}</i>
          </s>
        </div>

        <div className="flex w-full justify-between">
          <Link
            to={`/order?g=${prop.id}`}
            title="order macbook naw"
            className="bg-primary hover:bg-tertiary duration-200  w-[50%] sm:w-[60%] py-2  sm:py-3 flex items-center pl-3 text-white font-bold rounded-2xl"
          >
            Order Now <FaShoppingCart />
          </Link>
          <button
            title={`Add ${prop.name} to your cart`}
            className="bg-secondary flex items-center justify-center w-[40%] sm:w-[35%] py-2 sm:py-3 text-white hover:bg-tertiary font-bold rounded-2xl "
            onClick={updateCart}
          >
            Cart <FaShoppingBag className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
