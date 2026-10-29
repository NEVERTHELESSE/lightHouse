import { useLocation, useSearchParams } from "react-router";
import { topPicks } from "~/data/topPick";
import Items from "../home/Items";
import { Suspense, lazy, useEffect, useState } from "react";
import type { productType } from "~/types/productType";
import SingleProductLoading from "~/loading/SingleProductLoading";
import ProductInfo from "./ProductInfo";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "~/lib/subase";
import ProductLoading from "~/loading/ProductLoading";
const MoreProduct = lazy(() => import("./MoreProduct"));
const Similar = lazy(() => import("./Similar"));
export default function Product() {
  // const [item, setItem] = useState<productType>({});
  const locate = useLocation().search.split("=")[1];
  const [imageUrl, setImageUrl] = useState("");

  const { data, error, isPending } = useQuery({
    queryKey: [locate],
    queryFn: async () => {
      const result = await supabase
        .from("products")
        .select("*")
        .eq("id", locate);
      result.data && setImageUrl(result.data[0].files[0]);
      return result.data && result.data[0];
    },
  });
  return (
    <div className="py-14 md:py-40 px-5 flex  flex-col justify-between w-screen items-center">
      {isPending ? (
        <SingleProductLoading />
      ) : (
        <div className="justify-around md:flex w-full">
          <div className="my-2 flex md:w-[50%] ">
            <img
              src={imageUrl}
              alt=""
              className="w-[80%] h-[50vh] md:h-[60vh] border object-contain sm:object-contain"
            />
            <div className="flex ml-4 flex-col justify-between">
              {data.files.map((list: string) => (
                <img
                  onClick={() => setImageUrl(list)}
                  src={list}
                  key={list}
                  className={`min-w-15 h-15 cursor-pointer border object-cover ${list == imageUrl && "border-2  p-1"}`}
                />
              ))}
            </div>
          </div>
          <ProductInfo {...data} />
        </div>
      )}
      {/* <h3 className="text-3xl my-6 font-bold">Check this out {data.brand}</h3> */}
      <div className="flex justify-between flex-wrap">
        <Suspense fallback={<ProductLoading />}>
          <Similar />
        </Suspense>
      </div>
      <h3 className="text-3xl my-6 font-bold">
        {/* More product from {data.brand} */}
      </h3>
      <div className="flex justify-between flex-wrap">
        <Suspense fallback={<ProductLoading />}>
          <MoreProduct />
        </Suspense>
      </div>
      <h3 className="text-3xl my-6 font-bold">You might also like</h3>
      <div className="flex justify-between flex-wrap">
        <Suspense fallback={<ProductLoading />}>
          <MoreProduct />
        </Suspense>
      </div>
    </div>
  );
}
