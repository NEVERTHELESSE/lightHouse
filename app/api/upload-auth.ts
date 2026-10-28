import Imagekit from "@imagekit/nodejs";
import type { Route } from "../+types/root";
// import type {} from './+types/api.imagekit-auth';
const imagekit = new Imagekit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export async function loader({ request }: Route.LoaderArgs) {
  // const id = request.json();
  const { token, expire, signature } =
    imagekit.helper.getAuthenticationParameters();
  return Response.json({
    token,
    expire,
    signature,
    publicKey: process.env.IMAGEKIT_PUBLIC,
  });
}
