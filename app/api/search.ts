import type { LoaderFunctionArgs } from "react-router";
import { supabase } from "~/lib/subase";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  let id = Number(url.searchParams.get("id"));
  if (!id) {
    return Response.json({
      message: "invalid user id",
    });
  }
  const { data, error } = await supabase
    .from("users")
    .select("search")
    .eq("id", id);
  if (error) {
    console.log(error);
    return Response.json({
      message: "there was an error while processing data",
    });
  }

  return Response.json({
    message: data[0].search,
  });
}
