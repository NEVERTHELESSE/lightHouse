import type { LoaderFunctionArgs } from "react-router";
import { supabase } from "~/lib/subase";

export async function loader({ request }: LoaderFunctionArgs) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });
  if (data?.length !== 0) {
    const products = data?.map((product) => ({
      id: product.id,
      price: product.price,
      name: product.name,
      width: product.width,
      ram: product.ram,
      drive: product.isSSD ? "SSD" : "HDD",
      height: product.height,
      discount: product.discount,
      size: product.storage,
      rate: product.rate,
      src: product.files?.[0],
    }));
    return Response.json({
      message: products,
    });
  } else {
    return Response.json({
      message: [],
    });
  }
}
