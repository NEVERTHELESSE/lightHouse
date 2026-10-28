import { upload } from "@imagekit/react";
import { useState, type ChangeEvent } from "react";
import { FaImage } from "react-icons/fa";
import { toast } from "react-toastify";
import { api } from "~/api/api";

export default function ImageUpload({
  addedImage,
  setAddedImage,
  setAddedFile,
}: any) {
  const [bigImage, setBigImage] = useState("");
  async function addImage(e: ChangeEvent<HTMLInputElement>) {
    const selectedImageLength = e.target.files?.length;
    const selectedImage = e.target.files;

    if (selectedImageLength) {
      const listImage = Array.from(
        { length: selectedImageLength - 1 },
        (_, i) => i + 1
      );

      if (selectedImage) {
        setBigImage(URL.createObjectURL(selectedImage[0]));
        const date = new Date();
        listImage.concat(1).map(async (_, index) => {
          if (!selectedImage[index].type.startsWith("image/")) {
            toast.warning("Please select an image");
          }
          setAddedImage((prev: string) =>
            prev.concat(URL.createObjectURL(selectedImage[index]))
          );
          const file = selectedImage[index];
          const authResponse = await api.get("imagekit");
          if (!authResponse.data) {
            toast("image upload unavailabale");
          }
          const auth = await authResponse.data;
          try {
            const result = await upload({
              file: file,
              fileName: file.name,
              folder: `/lightHouse/laptops/${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
              useUniqueFileName: true,
              signature: auth.signature,
              publicKey: auth.publicKey,
              expire: auth.expire,
              token: auth.token,
            });
            setAddedFile((prev: string[]) => [...prev, result.url]);

            // toast.success("image upload");
          } catch (error) {
            console.log(error);
          } finally {
            console.log("done");
          }
        });
      }
    }

    // const files = e.target.files?[0]
    // if (!files) return;
    // if (!files.type.startsWith('image/')){
    //   toast('Please select an image')
    // }
    // if (files.size > 5*1024*1024){
    //   toast('image must be 5mb or smaller')
    // }

    // const authResponse = api('imagekit-auth');
    // if (!authResponse){
    //   toast('count not authenticate upload')
    // }
    // const auth = await authResponse
    //     const file = e.target.files?.[0];
    // if (!file) return;
    // const result = await upload({
    //   file: file,
    // })
    // console.log(result)

    // toast("No image is selected");
  }

  return (
    <div className="w-160 my-4 ml-5">
      <div className="w-full shadow flex">
        {addedImage.length == 0 ? (
          <div className="size-50 border">Selected image will appear here</div>
        ) : (
          <img src={bigImage} className="size-50 object-cover" alt="" />
        )}
        <label
          htmlFor="image"
          className="size-50 ml-10 flex flex-col items-center justify-center shadow"
        >
          <FaImage className="text-6xl" />
          Choose or drop <br /> your image here
        </label>
        <input
          type="file"
          onChange={addImage}
          accept=".jpg"
          multiple
          id="image"
          className="hidden"
        />
      </div>
      {addedImage.length == 0 ? null : (
        <>
          <p>Click to view image </p>
          <div className="flex my-4">
            {addedImage.map((add: string) => (
              <img
                src={add}
                onClick={() => setBigImage(add)}
                key={add}
                className="size-15 mx-2 cursor-pointer"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
