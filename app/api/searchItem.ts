import type { LoaderFunctionArgs } from "react-router";
import { supabase } from "~/lib/subase";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  let search = url.searchParams.get("s");
  if (!search) {
    return Response.json({
      message: "invalid user id",
    });
  }
  console.log(search);
  const { data, error } = await supabase
    .from("products")
    .select("id,name,files,rate,ram,storage,discount ")
    .ilike("name", `%${search}%`);
  if (error) {
    console.log(error);
    return Response.json({
      message: "there was an error while processing data",
    });
  }

  return Response.json({
    message: data,
  });
}
