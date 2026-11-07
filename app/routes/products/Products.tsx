import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import ProductLoading from "~/loading/ProductLoading";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "~/api/api";
import type { productType } from "~/types/productType";
import Items from "../home/Items";

export default function Products() {
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await api.get(`newproduct`);
      return res.data.message;
    },
    placeholderData: keepPreviousData,
  });
  return (
    <div className="my-2 p-2 md:my-10 md:6 md:p-12">
      <div className="flex justify-between  items-center">
        <div>
          <h4 className="text-secondary text-[15px] font-bold">
            If you cound'nt find the type of gadget you are looking for, kindly
            make an request for it.
          </h4>
        </div>
      </div>
      {/* <ProductLoading /> */}

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
