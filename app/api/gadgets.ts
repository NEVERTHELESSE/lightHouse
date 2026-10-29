import type { LoaderFunctionArgs } from "react-router";
import { supabase } from "~/lib/subase";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  let page = Number(url.searchParams.get("page"));
  const category = url.searchParams.get("category");
  let pageSize = Number(url.searchParams.get("size"));
  console.log(category, page);
  if (!page) {
    page = 1;
  }
  if (!pageSize) {
    pageSize = 8;
  }
  if (category) {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", category);
    // .select("id,title, width, height,files, size,drive,rate, price,src");
    // .eq("category", category);
    //   .range((page - 1) * pageSize, page * pageSize - 1)
    console.log(data);
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
}
