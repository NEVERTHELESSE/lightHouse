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
      .select("id,title, width, height, size,drive,rate, price,src")
      .eq("category", category)
      .range((page - 1) * pageSize, page * pageSize - 1);

    if (error) {
      return Response.json({
        message: "There was an error while processing data",
      });
    }

    if (data?.length !== 0) {
      const products = data?.map((product) => ({
        id: product.id,
        price: product.price,
        title: product.title,
        width: product.width,
        height: product.height,
        size: product.size,
        drive: product.drive,
        rate: product.rate,
        src: product.src?.[0],
      }));
      return Response.json({
        message: products,
      });
    } else {
      return Response.json({
        message: "no data found",
      });
    }
  }

  const { data, error } = await supabase
    .from("products")
    .select("id,title, width, height, size,drive,rate, price,src")
    .range((page - 1) * pageSize, page * pageSize - 1);

  if (error) {
    return Response.json({
      message: "There was an error while processing data",
    });
  }

  if (data?.length !== 0) {
    const products = data?.map((product) => ({
      id: product.id,
      price: product.price,
      title: product.title,
      width: product.width,
      height: product.height,
      size: product.size,
      drive: product.drive,
      rate: product.rate,
      src: product.src?.[0],
    }));
    return Response.json({
      message: products,
    });
  } else {
    return Response.json({
      message: "no data found",
    });
  }
}

// export function action({request}:ActionFunctionArgs){
//   return Response.json({
//     message: 'hello world'
//   })
// }
