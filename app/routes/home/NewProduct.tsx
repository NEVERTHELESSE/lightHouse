import { useState } from "react";
import { FaArrowRight, FaShoppingBag, FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { options } from "~/data/data";
import { topPicks } from "~/data/topPick";
import ProductLoading from "~/loading/ProductLoading";
import type { topPicksType } from "~/types/productType";
import Items from "./Items";

export default function NewProduct() {
  const lists = [1, 2, 3, 4, 5];

  function shuffleArray(array: topPicksType) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  const products = [];
  return (
    <div className="my-2 p-2 md:my-10 md:6 md:p-12">
      <div className="flex justify-between  items-center">
        <div>
          <h4 className="text-secondary text-[15px] font-bold">
            If you cound'nt find the type of gadget you are looking for, kindly
            make an request for it.
          </h4>
          <span className="md:text-5xl my-15 font-bold ">NEW GADGET</span>
        </div>
      </div>
      {/* <ProductLoading /> */}
      <div className="flex flex-wrap justify-between w-full">
        {products.map((product) => (
          <Items {...product} />
        ))}
      </div>
      <div className="flex items-center w-full justify-center my-8">
        <Link
          to="/products"
          className="bg-linear-150 text-white font-bold rounded-full from-secondary to-tertiary px-20 flex items-center py-4"
        >
          Load More Products
          <FaArrowRight className="ml-4 animate-bounce" />
        </Link>
      </div>
    </div>
  );
}
