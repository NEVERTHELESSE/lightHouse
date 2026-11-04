import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import bcrypt from "bcrypt";
import { supabase } from "~/lib/subase";
import { SignJWT } from "jose";
import { jwt } from "./jwt";
export async function loader({ request }: LoaderFunctionArgs) {
  return Response.json({
    message: "hellow world",
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.json();
  if (!body.email || !body.password) {
    return Response.json({
      message: "invalid user info",
    });
  }
  const userInfo = await supabase
    .from("users")
    .select("fullName, email, password,profilePics,id")
    .eq("email", body.email);
  if (userInfo.error) {
    return Response.json({
      message: "error while loading user info",
    });
  }
  if (!userInfo.data[0]) {
    return Response.json({
      message: "invalid email or password",
    });
  }
  const { email, password, fullName, profilePics, id } = userInfo.data[0];
  const cryptPassword = await bcrypt.compare(body.password, password);
  if (!cryptPassword) {
    return Response.json({
      message: "invalid password",
    });
  }
  const token = await jwt(email);

  if (!token) {
    return Response.json({ message: "token not found" });
  }
  console.log(userInfo);
  return Response.json(
    {
      message: "User successfully login",
      id,
      email,
      fullName,
      profilePics,
    },
    {
      status: 201,
      headers: {
        "Set-Cookie": `token=${token}; HttpOnly:; Path=/; Max-Age=3600; SameSite=lax`,
      },
    }
  );
}
