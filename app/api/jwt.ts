import { SignJWT } from "jose";

export async function jwt(email: string) {
  const secret = process.env.JWT_KEY;
  const key = new TextEncoder().encode(secret);
  if (!email) {
    return "email not";
  }
  if (!secret) {
    return "jwt key not found";
  }

  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(email)
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(key);
  if (!token) {
    return "unable to process token";
  }
  return token;
}
