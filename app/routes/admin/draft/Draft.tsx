import { supabase } from "~/lib/subase";
import type { Route } from "../+types/Admin";
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "~/api/api";
import { FaTrash } from "react-icons/fa";
import type { productType } from "~/types/productType";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function Draft() {
  const [isError, setIsError] = useState(false);

  const [size, setSize] = useState(16);
  const [reFetch, setRefetch] = useState(1);
  const { data, isPending } = useQuery({
    queryKey: [size, reFetch],
    queryFn: async () => {
      const res = await api.get(
        `drafts?category=laptop`
        // `gadgets?page=${1}&&category=${active}&&size=${size}`
      );
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

  async function recover(id: string) {
    const { data, error } = await supabase
      .from("drafts")
      .select("*")
      .eq("id", id);
    if (error) {
      toast("there wasn error while getting the data");
    }
    const result = await supabase.from("products").insert(data);
    if (result.error) {
      toast("There was an error while recovering data");
      return;
    }
    const deleted = await supabase.from("drafts").delete().eq("id", id);
    if (deleted.error) {
      toast("there was an error while deleting the data");
      return;
    }
    setRefetch((prev) => prev + 1);
    toast.success("product successfully recovered...");
    console.log(id);
  }

  return (
    <div>
      <p>
        product in draft will be deleted in 30 day, settings can be change in
        setting page{" "}
      </p>
      <div className="pb-10">
        {isError ? (
          "there was an error "
        ) : (
          <>
            {isPending ? (
              "loading"
            ) : (
              <>
                {data.map((product: productType) => (
                  <div
                    key={product.id}
                    className="flex justify-between mb-2 hover:bg-gray-300 cursor-pointer bg-white shadow rounded-2xl overflow-hidden w-full"
                  >
                    <div className="flex items-center">
                      <img
                        src={product.src}
                        alt="image"
                        className="size-20 border-r  object-cover"
                      />
                      <div className="p-2">
                        <p>
                          {product.title} (core i7) (8bg ram) (13.7 X 21 inch)
                        </p>
                        <p>
                          Uploaded By:{" "}
                          <span className="font-bold">neverthelesse </span>on
                          <span>(25/02/2025 2:PM)</span>
                        </p>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col  items-end">
                      <span className="font-bold">N 234,000</span>
                      <div className="flex w-30  mt-2">
                        <button
                          className="hover:scale-125 duration-500"
                          onClick={() => recover(product.id)}
                        >
                          <FaArrowRotateLeft />
                        </button>
                        <button
                          // onClick={() => deleteOne(product.id)}
                          className="text-red-500 mx-10 hover:scale-105 duration-200 hover:text-red-600"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
