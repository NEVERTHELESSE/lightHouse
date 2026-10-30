import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { config } from "dotenv";
import axios from "axios";

import crypto from "crypto";
import { calculateTotal } from "~/functions/calculateTotal";
import { supabase } from "~/lib/subase";
config();
export function loader({ request }: LoaderFunctionArgs) {
  return Response.json({
    message: "request is not allow",
  });

  //send code to the developer email, that someone is try to get api info
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.json();
  try {
    if (!body.userInfo.email) {
      return Response.json({
        message: "data is not complete",
      });
    } else {
      const orderInfo = body.products;
      const userInfo = body.userInfo;
      const totalAmount = body.totalAmount;
      const confirmAmount = calculateTotal(orderInfo);
      if (confirmAmount !== totalAmount) {
        return Response.json({
          message: "Invalid amount",
        });
      }
      const orderId = `ORD-${crypto.randomUUID()}`;
      const { data, error } = await supabase
        .from("orders")
        .insert({ userInfo, orderInfo, orderId });
      if (error) {
        console.log(error);
        return Response.json({
          message: "there was an error while adding order to database",
        });
      }

      const payment = process.env.PAYSTACKKEY; //welcome

      const paystackData = {
        email: userInfo.email,
        amount: totalAmount * 100,
        currency: "NGN",
        callback_url: `http://localhost:5173/checkoutsuccess?ord=${orderId}`,
        metaData: {
          custore_id: body.userInfo.id,
          full_name: "",
          phone_number: "",
          orderId,
          cancel_action: "http://localhost:5173/payment/cancelled",
        },
      };
      const res = await axios.post(
        "https://api.paystack.co/transaction/initialize",
        { ...paystackData },
        {
          headers: {
            Authorization: `Bearer ${payment}`,
            "Content-Type": "plication/json",
          },
        }
      );
      if (res.data.status) {
        console.log(res.data);
        return Response.json({
          message: "sent",
          success: true,
          url: res.data.data.authorization_url,
          reference: res.data.data.reference,
        });
      }
      return Response.json(
        {
          success: false,
          message: res.data.message,
        },
        { status: 400 }
      );
      // await sendEmail();
    }
  } catch (error) {
    return Response.json({
      message: "data is not complete",
    });
  }
}
