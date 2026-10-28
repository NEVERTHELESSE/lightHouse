import type { LoaderFunction, LoaderFunctionArgs } from "react-router";
import { supabase } from "~/lib/subase";
import { invalidOrderInfo, successOrder } from "./email";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  let orderId = url.searchParams.get("ord");

  if (!orderId) {
    return Response.json({
      message: "invalid order id",
    });
  }
  const { data, error } = await supabase
    .from("orders")
    .select()
    .eq("orderId", orderId);
  if (error) {
    return Response.json({
      message: "unable to get data",
    });
  }
  if (data.length == 0) {
    await invalidOrderInfo();
    return Response.json({
      message: "invalid order id",
    });
  }
  const changeStatus = await supabase
    .from("orders")
    .update({ status: "order place" })
    .eq("orderId", orderId)
    .select();
  successOrder(data[0].orderInfo);
  if (changeStatus.error) {
    return Response.json({
      messsage: "error while update order status kindly contact the vendor",
    });
  }

  return Response.json({
    message: "success",
  });
  //send code to the developer email, that someone is try to get api info
}
