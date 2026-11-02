import type { ActionFunctionArgs } from "react-router";
import { supabase } from "~/lib/subase";

export async function action({ request }: ActionFunctionArgs) {
  const url = new URL(request.url);
  let id = Number(url.searchParams.get("id"));
  const body = await request.json();
  if (!id || !body) {
    console.log("no valid data");
    return Response.json({ message: "userinfo not found!" });
  }
  const previous = await supabase
    .from("users")
    .select("carts")
    .eq("id", id)
    .single();
  if (previous.error) {
    console.log(previous.error);
    return Response.json({ message: "unable" });
  }
  console.log(previous.data.carts);
  const all = [...previous.data.carts, body];

  const { data, error } = await supabase
    .from("users")
    .update({ carts: all })
    .eq("id", id);
  // const { data, error } = await supabase.rpc("add_to_back_cart", {
  //   p_user_id: 13,
  //   p_product: body,
  // });
  if (error) {
    console.log(error);
    return Response.json({ message: "there was an error while updating cart" });
  }
  return Response.json({
    message: "Product successfull added to cart",
  });
}
