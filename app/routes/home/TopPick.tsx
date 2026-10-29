import { useState } from "react";
import ProductLoading from "~/loading/ProductLoading";
import Items from "./Items";
import Selection from "~/components/Selection";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "~/api/api";
import type { productType } from "~/types/productType";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
export default function TopPick() {
  const [active, setActive] = useState("laptop");

  const [isError, setIsError] = useState(false);
  const { data, isPending, error } = useQuery({
    queryKey: [active],
    queryFn: async () => {
      const res = await api.get(`gadgets?page=${1}&&category=${active}`);
      console.log(res.data);
      if (
        res.data.message == "There was an error while processing data" ||
        res.data.message === "no data found"
      ) {
        setIsError(true);
      }
      return res.data.message;
    },
    placeholderData: keepPreviousData,
  });
  return (
    <div className="p-2 m-2 md:my-10 md:p-10">
      <div className="md:flex justify-between items-center">
        <div>
          <h4 className="text-secondary font-bold">SHOP BY CATEGORY</h4>
          <span className="md:text-5xl my-15 font-bold ">Top Pick</span>
        </div>
        <h3 className="text-2xl font-bold uppercase">{active}</h3>
        <Selection active={active} setActive={setActive} />
      </div>
      {error ? (
        <>
          'There was an error whilte getting the data, kindly check your
          internet connection and refresh the page'
          <ProductLoading />
        </>
      ) : (
        <>
          {isPending ? (
            <ProductLoading />
          ) : (
            <div className="flex flex-wrap justify-between w-full">
              {data.length !== 0 ? (
                <>
                  {data.map((product: productType) => (
                    <Items {...product} key={product.id} />
                  ))}
                </>
              ) : (
                <div className="w-full">
                  <p>no data found</p>
                  <ProductLoading />
                </div>
              )}
            </div>
          )}
        </>
      )}
      <div className="flex items-center w-full justify-center my-8">
        <Link
          to={`/products?category=${active}`}
          className="bg-linear-150 capitalize text-white font-bold rounded-full from-secondary to-tertiary px-20 flex items-center py-4"
        >
          Browse more {active}
          <FaArrowRight className="ml-4 animate-bounce" />
        </Link>
      </div>
    </div>
  );
}
