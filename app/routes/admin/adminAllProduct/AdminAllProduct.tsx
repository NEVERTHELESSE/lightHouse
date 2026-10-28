import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { api } from "~/api/api";
import { supabase } from "~/lib/subase";
import type { productType } from "~/types/productType";

export default function AdminAllProduct() {
  const [active, setActive] = useState("");
  const [isError, setIsError] = useState(false);
  const [size, setSize] = useState(16);
  const [reFetch, setRefetch] = useState(1);
  const { data, isPending } = useQuery({
    queryKey: [active, size, reFetch],
    queryFn: async () => {
      const res = await api.get(
        `gadgets?category=laptop`
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

  async function deleteOne(productId: string) {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", productId);
    if (error) {
      console.log(error);
      toast("There was an error", { type: "error" });
      return;
    }
    const draft = await supabase.from("drafts").insert(data);
    if (draft.error) {
      toast("There was an error while adding product to draft");
      return;
    }
    const deleted = await supabase
      .from("products")
      .delete()
      .eq("id", productId);
    if (deleted.error) {
      toast("there was an error while deleting data");
      return;
    }
    setRefetch((prev) => prev + 1);
    toast(
      "items is added to draft, it can be recover within 30days, you can also change the date in drafts"
    );
  }

  return (
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
                      <button>
                        <FaPen />
                      </button>
                      <button
                        onClick={() => deleteOne(product.id)}
                        className="text-red-500 mx-10 hover:scale-105 duration-200 hover:text-red-600"
                      >
                        <FaTrash />
                      </button>
                      <input type="checkbox" className="cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}
