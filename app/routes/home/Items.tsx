import { FaShoppingBag, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router";
// import converter from "number-to-words";
import userCounterStore from "~/stores/userCart";
import type { productType, topPicksType } from "~/types/productType";
import Price from "~/components/Price";
import Rate from "~/components/Rate";
import { Discount } from "~/components/Discount";
import { api } from "~/api/api";

export default function Items(prop: productType) {
  const increment = userCounterStore((state: any) => state.increment);
  const showCart = userCounterStore((state: any) => state.showCart);
  const addProduct = userCounterStore((state: any) => state.addProduct);
  const addProducts = userCounterStore((state: any) => state.addProducts);
  const products = userCounterStore((state: any) => state.products);
  const user = userCounterStore((state: any) => state.user);

  const removeDupliate = [
    ...new Map(products.map((item: productType) => [item.id, item])).values(),
  ];

  async function updateCart() {
    console.log(removeDupliate);
    const quantity = 1;

    const cartInfo = {
      id: prop.id,
      src: prop.src,
      name: prop.name,
      price: prop.price,
      quantity,
    };
    console.log(user);
    if (user.email) {
      const result = await api
        .post(`addToCart?id=${user.id}`, { ...cartInfo })
        .then((res) => console.log(res.data));
      addProduct(cartInfo);
      console.log(result);
    } else {
      addProduct(cartInfo);
    }
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
        <Rate length={prop.ram} />
        <div className="flex my-2 items-center justify-between">
          <h4
            className="font-bold text-2xl "
            title="Seven Hundred and Eighty Five Thousand"
          >
            <Price productPrice={prop.price} />
          </h4>
          <Discount discount={prop.discount} />
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
