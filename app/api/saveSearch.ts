import type { LoaderFunctionArgs } from "react-router";
import { supabase } from "~/lib/subase";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  let id = Number(url.searchParams.get("id"));
  let search = url.searchParams.get("s");
  if (!id || !search) {
    return Response.json({
      message: "data is not comple",
    });
  }

  const { data, error } = await supabase.rpc("append_to_order", {
    row_id: id,
    new_value: search,
  });
  if (error) {
    console.log(error);
    return Response.json({
      message: "error while saving search",
    });
  }
  return Response.json({
    message: data,
  });
}
