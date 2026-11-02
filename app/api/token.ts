import { verify } from "crypto";
import { jwtVerify } from "jose";
import type { LoaderFunctionArgs } from "react-router";
import { supabase } from "~/lib/subase";

export async function loader({ request }: LoaderFunctionArgs) {
  const cookie = request.headers.get("Cookie");
  if (!cookie) {
    return Response.json({ message: "no token" });
  }
  const token = cookie.split("=")[1];
  const secret = process.env.JWT_KEY;

  try {
    const key = new TextEncoder().encode(secret);
    const email = await (await jwtVerify(token, key)).payload.email;
    if (!email) {
      return Response.json({ message: "invalid key" });
    }

    // const { data, error } = await supabase
    //   .from("users")
    //   .select("fullName,email,profilePics")
    //   .eq("email", email);
    const { data, error } = await supabase.rpc("get_cart_count", {
      user_email_input: email,
    });
    if (error) {
      return Response.json({ message: "Unable to load user with the key" });
    }

    return Response.json({
      message: data,
    });
  } catch (error) {
    return Response.json({ message: "error" });
  }
}
