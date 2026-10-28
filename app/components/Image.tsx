import { Image, ImageKitProvider } from "@imagekit/react";

export default function Img() {
  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/your_imagekit_id">
      <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </ImageKitProvider>
  );
}
