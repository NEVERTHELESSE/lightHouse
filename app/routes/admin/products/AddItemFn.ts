import { toast } from "react-toastify";
import { defaultProduct } from "~/data/admin/productDefault";

export function addItem(
  addedFile: any,
  setPendingProduct: any,
  productInfo: any,
  pendingProduct: any,
  setProductInfo: any,
  setAddedImage: any,
  setAddedFile: any,
  category: string
) {
  if (addedFile.length == 0) {
    toast.warning(
      "image uploader is still loading.., kindly wait for a few seconds"
    );
    return;
  }
  const date = new Date();
  setPendingProduct((prev: any) => [
    ...prev,
    {
      ...productInfo,
      files: addedFile,
      folder: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
      category,
    },
  ]);
  console.log(pendingProduct);
  setProductInfo(defaultProduct);
  setAddedImage([]);
  setAddedFile([]);
}
