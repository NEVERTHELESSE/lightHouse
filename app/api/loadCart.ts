import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { supabase } from "~/lib/subase";

export async function loader({ request }: LoaderFunctionArgs) {
  return Response.json({
    message: "type not allow",
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.json();
  if (!body.id) {
    return Response.json({
      message: "invalid id",
    });
  }
  const { data, error } = await supabase
    .from("users")
    .select("carts")
    .eq("id", body.id)
    .single();

  if (error) {
    console.log(error);
    return Response.json({
      message: error,
    });
  }

  return Response.json({ message: data });
}
