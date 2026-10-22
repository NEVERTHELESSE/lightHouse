import { FaShoppingBag, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router";
import converter from "number-to-words";
import userCounterStore from "~/stores/userCart";
import type { productType, topPicksType } from "~/types/productType";

export default function Items(prop: productType) {
  const lists = [1, 2, 3, 4, 5];
  const increment = userCounterStore((state: any) => state.increment);
  const showCart = userCounterStore((state: any) => state.showCart);
  const addProduct = userCounterStore((state: any) => state.addProduct);

  function updateCart() {
    addProduct({
      id: prop.id,
      src: prop.src,
      title: prop.title,
      price: prop.price,
      quantity: 1,
    });
    increment();
    showCart();
  }

  return (
    <div
      title={converter.toWords(prop.price).toUpperCase() + " NAIRA"}
      key={prop.id}
      className="rounded-2xl bg-white my-2 w-full md:w-[calc(100%/2.3)] lg:w-[calc(100%/4.2)] shadow-lg box  overflow-hidden"
    >
      <Link prefetch="intent" to={`/product?s=${prop.id}`}>
        <img
          src={prop.src}

          className=" object-contain w-full h-70 shadow-lg "
        />
      </Link>

      <div className="px-3 py-2 ">
        <h3 className="font-bold uppercase sm:text-2xl one w-full">
          {prop.title}
        </h3>
        <p className="text-gray-600">
          {prop.width} X {prop.height} | {prop.ram}GB | {prop.size} |{" "}
          {prop.drive}
        </p>
        <div className="flex my-2 items-center justify-between">
          <h4
            className="font-bold text-2xl "
            title="Seven Hundred and Eighty Five Thousand"
          >
            ₦ {prop.price.toLocaleString()}
          </h4>
          <div className="flex w-max">
            {lists.map((list) => (
              <FaStar className="text-primary mr-1 " key={list} />
            ))}
          </div>
        </div>

        <div className="flex w-full justify-between">
          <button
            title="order macbook naw"
            className="bg-primary hover:bg-tertiary duration-200  w-[50%] sm:w-[60%] py-2  sm:py-3 flex items-center pl-3 text-white font-bold rounded-2xl"
          >
            Order Now <FaShoppingCart />
          </button>
          <button
            title={`Add ${prop.title} to your cart`}
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
