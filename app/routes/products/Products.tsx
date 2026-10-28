import { useState } from "react";
import Selection from "~/components/Selection";
import { productD } from "~/data/brand";
import Items from "../home/Items";
import { topPicks } from "~/data/topPick";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "~/api/api";
import type { productType } from "~/types/productType";
import ProductLoading from "~/loading/ProductLoading";

export default function Products() {
  const [active, setActive] = useState("laptop");

  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([]);
  const { data, isPending } = useQuery({
    queryKey: [active, page],
    queryFn: async () => {
      const res = await api.get(
        // `gadgets?page=${page}&&category=${active}&&size=20`
        `gadgets?page=${page}&&size=16`
      );
      if (
        res.data.message == "There was an error while processing data" ||
        res.data.message === "no data found"
      ) {
        if (page == 1) {
          setIsError(true);
        }
      }
      setProducts((prev: any[]) => prev.concat(res.data.message));
      return res.data.message;
    },
    placeholderData: keepPreviousData,
  });
  const [select, setSelect] = useState("dell");

  function loadMoreProduct() {
    setPage((prev) => prev + 1);
    console.log(page);
  }

  return (
    <div className="py-30 px-10">
      <div className="flex">
        <div className="w-50 h-full"></div>
        <div className="rounded-2xl mr-5 box h-[85vh] fixed  overflow-hidden flex flex-col w-40">
          {productD.map((p, i) => (
            <button
              onClick={() => setSelect(p)}
              key={p}
              className={`uppercase ${select == p && "bg-primary text-white"} text-left ${i !== productD.length - 1 && " border-b"} p-4 `}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="w-full">
          <Selection active={active} setActive={setActive} />
          {isError ? (
            <>
              'There was an error whilte getting the data, kindly check your
              internet connection and refresh the page'
              <ProductLoading />
            </>
          ) : (
            <>
              {products.length == 0 ? (
                <ProductLoading />
              ) : (
                <div className="flex flex-wrap justify-between w-full">
                  {products.map((product: productType) => (
                    <Items {...product} key={product.id} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <button onClick={loadMoreProduct}>loadmore</button>
    </div>
  );
}
