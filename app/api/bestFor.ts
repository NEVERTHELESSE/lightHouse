import type { LoaderFunctionArgs } from "react-router";
import { supabase } from "~/lib/subase";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  let page = Number(url.searchParams.get("page"));
  const b = url.searchParams.get("b");
  let pageSize = Number(url.searchParams.get("size"));
  if (!page) {
    page = 1;
  }
  if (!pageSize) {
    pageSize = 8;
  }
  if (b) {
    const { data, error } = await supabase
      .from("products")
      .select(
        "id, price, name, width , ram,name, isSSD, height, discount, storage, rate, files",
      )
      .contains("bestFor", [b]);

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
