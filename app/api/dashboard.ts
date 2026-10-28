import type { ActionFunctionArgs } from "react-router";
import { supabase } from "~/lib/subase";

export async function loader({ request }: ActionFunctionArgs) {
  try {
    const { count, error } = await supabase
      .from("products")
      .select("*", { count: "exact", head: true });
    console.log(count);
    if (error) {
      return Response.json({
        message: "There was an error while getting the data",
      });
    }
    return Response.json({
      message: count,
    });
  } catch (error) {
    return Response.json({
      message: "there was an error while getting the data",
    });
  }
}
