import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { supabase } from "~/lib/subase";
import ProductLoading from "~/loading/ProductLoading";
import Items from "../home/Items";
import type { productType } from "~/types/productType";

export default function Category() {
  const [locate, setLocate] = useState("");
  const id = useLocation();

  useEffect(() => {
    try {
      const productId = id.search
        .split("?")
        .filter((r) => r.startsWith("b"))[0]
        .split("=")[1];
      console.log(productId);
      setLocate(productId);
    } catch (error) {
      toast("Invalid category id, kindly check your url");
    }
  }, []);

  const { data, isPending, error } = useQuery({
    queryKey: ["bestFor"],
    queryFn: async () => {
      const result = await supabase
        .from("products")
        .select("*")
        .contains("bestFor", [locate]);
      console.log(result.data);
      return result.data;
    },
  });

  return (
    <div className="py-30 px-10">
      {locate !== "" && <h3>{locate}</h3>}

      {error ? (
        "there was an error while loading data"
      ) : (
        <>
          {isPending ? (
            <ProductLoading />
          ) : (
            <div className="flex flex-wrap justify-between w-full">
              {data?.length != 0 ? (
                <>
                  {data?.map((r: productType, index: number) => (
                    <Items {...r} key={index} />
                  ))}
                </>
              ) : (
                <ProductLoading />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
