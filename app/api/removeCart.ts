import type { ActionFunctionArgs } from "react-router";
import { supabase } from "~/lib/subase";

export async function loader({ request }: ActionFunctionArgs) {
  const url = new URL(request.url);
  let id = Number(url.searchParams.get("id"));
  const body = await request.json();
  if (!id || !body) {
    console.log("no valid data");
    return Response.json({ message: "userinfo not found!" });
  }
  const previous = await supabase
    .from("users")
    .update({ carts: body })
    .eq("id", id)
    .select("carts")
    .single();
  if (previous.error) {
    console.log(previous.error);
    return Response.json({ message: "unable" });
  }

  return Response.json({
    message: "Product successfull remove to cart",
  });
}
