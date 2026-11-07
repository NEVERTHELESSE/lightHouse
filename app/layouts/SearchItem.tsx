import Price from "~/components/Price";
import Rate from "~/components/Rate";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { Discount } from "~/components/Discount";
import userCounterStore from "~/stores/userCart";
import type { productType } from "~/types/productType";
import CircularLoading from "~/loading/CircularLoading";
import Request from "~/components/Request";

interface propT {
  data: productType[];
  loading: boolean;
  noData: boolean;
}

export default function SearchItem({ data, loading, noData }: propT) {
  return (
    <div className="flex   mx-5">
      {noData && (
        <>
          no product found, kindly request for a gadget here
          <Link
            to={`https://wa.me/2349051602536?text=Hello%20LightHouse%20I%20want%20make%20toan%20request%20for%20`}
          >
            request for the gadget
          </Link>
        </>
      )}
      {data.length == 0 ? (
        <CircularLoading />
      ) : (
        <>
          {data.map((pro) => (
            <Link
              to={`/product?s=${pro.id}`}
              className="flex max-w-150 mx-2  border shadow border-soft"
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
            </Link>
          ))}
        </>
      )}
    </div>
  );
}
