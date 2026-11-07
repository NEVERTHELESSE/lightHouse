import type { LoaderFunctionArgs } from "react-router";
import { months } from "~/data/data";
import { calculateTotalAmount } from "~/functions/calculateTotal";
import { supabase } from "~/lib/subase";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const month = url.searchParams.get("m");
  if (!month) {
    return Response.json({
      message: "month is not specify",
    });
  }
  const check = months.includes(month);
  if (!check) {
    return Response.json({ message: "invalid month" });
  }
  if (month === "02") {
    const { data, error } = await supabase
      .from("orders")
      .select("totalAmount")
      .gte("created_at", `2026-${month}-01T00:00:00`)
      .lt("created_at", `2026-${month}-28T00:00:00`);

    if (error) {
      console.log(error);
      return Response.json({
        message: "error",
      });
    }
    // const totalAmount = calculateTotalAmount(data);
    // console.log(totalAmount);
    return Response.json({
      message: data,
    });
  }
  const { data, error } = await supabase
    .from("orders")
    .select("totalAmount")
    .gte("created_at", `2026-${month}-01T00:00:00`)
    .lt("created_at", `2026-${month}-30T00:00:00`);

  if (error) {
    console.log(error);
    return Response.json({
      message: "error",
    });
  }

  const totalAmount = calculateTotalAmount(data);
  console.log(totalAmount);
  return Response.json({
    message: data,
  });
}
