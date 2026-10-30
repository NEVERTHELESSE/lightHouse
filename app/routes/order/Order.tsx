import CheckOutForm from "../checkout/CheckOutForm";
import { useLocation } from "react-router";
import { supabase } from "~/lib/subase";
import { useQuery } from "@tanstack/react-query";
import OrderInfo from "./OrderInfo";

export default function Order() {
  const locate = useLocation().search.split("=")[1];
  const { data, error, isPending } = useQuery({
    queryKey: [locate],
    queryFn: async () => {
      const result = await supabase
        .from("products")
        .select("*")
        .eq("id", locate);
      console.log(result.data);
      return result.data && result.data[0];
    },
  });

  return (
    <main className="py-24 mt-5 flex flex-col justify-center items-center sm:h-screen px-10  ">
      <div className="sm:flex items-center justify-center">
        <CheckOutForm />

        {!error ? (
          <>{isPending ? "loading" : <OrderInfo data={data} />}</>
        ) : (
          <p>there was an error</p>
        )}
      </div>
    </main>
  );
}
