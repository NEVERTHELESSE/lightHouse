import type { LoaderFunctionArgs } from "react-router";
import { supabase } from "~/lib/subase";

export async function loader({ request }: LoaderFunctionArgs) {
  const { data, error } = await supabase.from("orders").select("*");
  if (error) {
    return Response.json({
      message: "There was an error while loading the orders",
    });
  }
  return Response.json({
    message: data,
  });
}
