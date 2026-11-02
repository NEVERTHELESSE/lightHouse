import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { supabase } from "~/lib/subase";
import { jwt } from "./jwt";
export function loader({ request }: LoaderFunctionArgs) {
  //send emai
  return Response.json({ message: "method not allow" });
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.json();
  const { email, username, password }: any = body.userInfo ?? {};
  if (!email || !password) {
    return Response.json({ message: "no valid info" });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  if (!hashPassword) {
    return Response.json({ message: "Unable to hash password" });
  }
  const { data, error } = await supabase
    .from("users")
    .insert({ email, fullName: username, password: hashPassword })
    .select("id,email,fullName,username");
  if (error) {
    if (error.code == "23505") {
      return Response.json({
        message: "User already exist",
      });
    } else {
      return Response.json({
        message: "there wan an error while adding user to database",
      });
    }
  }

  const secret = process.env.JWT_KEY;
  const key = new TextEncoder().encode(secret);
  if (!secret) {
    return Response.json({
      message: "jwt key is not find",
    });
  }

  const token = await jwt(email);
  if (!token) {
    return Response.json({ message: "unable to generate token" });
  }
  return Response.json(
    { message: "User successfully created" },
    {
      status: 201,
      headers: {
        "Set-Cookie": `token=${token}; HttpOnly:; Path=/; Max-Age=3600; SameSite=lax`,
      },
    }
  );
}
