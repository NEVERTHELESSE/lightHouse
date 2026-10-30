import axios from "axios";
import { FaArrowRight, FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import userCounterStore from "~/stores/userCart";
import type { productType } from "~/types/productType";

export default function ProductInfo({
  width,
  drive,
  brand,
  name,
  size,
  height,
  src,
  id,
  files,
  price,
}: productType) {
  const addProduct = userCounterStore((state: any) => state.addProduct);
  const increment = userCounterStore((state: any) => state.increment);

  function addCart() {
    console.log(src, files);
    addProduct({
      id,
      src: files[0],
      name,
      price,
      quantity: 1,
    });
    increment();
  }

  return (
    <div className="f rounded-2xl  md:w-[40%] p-3 box">
      <div className="flex  ">
        <div className="lg:text-2xl ">
          <h2>NAME:</h2>
          <h2>CORE:</h2>
          <h2>RAM:</h2>
          <h2>SIZE:</h2>
          <h2>WIDTH </h2>
          <h2>HEIGHT</h2>
          <h2>BRAND</h2>
          <h2>YEAR</h2>
          <h2>TOUCH SCREEN</h2>
          <h2>FINGERPRINT</h2>
          <h2>FACE ID</h2>
          <h2>WARANTY</h2>
          <h2>PRICE</h2>
        </div>
        <div className="ml-4 w-full lg:text-2xl ">
          <h2>{name} </h2>
          <h2>CORE I7</h2>
          <h2>{size} GB</h2>
          <h2>{drive}</h2>
          <h2>{width}</h2>
          <h2>{height}</h2>
          <h2>
            {brand ? (
              brand
            ) : (
              <span title="kindly contact our customer service for the infomation">
                Unavailable
              </span>
            )}
          </h2>
          <h2>2023</h2>
          <h2>YES</h2>
          <h2>YES</h2>
          <h2>NO</h2>
          <h2>2 YEARS</h2>
          <h2>2 YEARS</h2>
          <h2>{price}</h2>
        </div>
      </div>
      <div className="md:flex  md:justify-around w-full">
        <Link
          onClick={addCart}
          to="/checkout"
          className="lg:px-6 text-white w-full sm:w-[50%]  font-bold my-4  py-3 bg-primary rounded-full flex items-center justify-center text-[15px]"
        >
          <FaShoppingCart />
          <span className="mx-1 text-auto ">Checkout</span>
          <FaArrowRight />
        </Link>
        <Link
          target="_blank"
          to={`https://wa.me/2347065945301?text=Hello%20I%20want%20to%20make%20an%20inquir%20about%20${name}%20is%20it%20negotiable%20${src}`}
          rel="noopener noreferrer"
          className="lg:px-6 w-full sm:w-[50%] text-white  font-bold my-4 py-3 bg-secondary rounded-full flex items-center   justify-center text-[15px]"
        >
          <FaWhatsapp />
          <p className="mx-3 text-auto ">Negotiate Price</p>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
