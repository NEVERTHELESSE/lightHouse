import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { config } from "dotenv";
import axios from "axios";
import crypto from "crypto";
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
    if (!body.id) {
      return Response.json({
        message: "data is not complete",
      });
    }
  } catch (error) {
    return Response.json({
      message: "data is not complete",
    });
  }
  const payment = process.env.PAYSTACKKEY; //welcome

  const orderId = `ORD-${crypto.randomUUID()}`;
  const paystackData = {
    email: body.userInfo.email,

    amount: body.price * 100,
    currency: "NGN",
    callback_url: "http://localhost:5173/success",
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
}
