import { useState, type FormEvent } from "react";
import { defaultProduct } from "~/data/admin/productDefault";
import ImageUpload from "./ImageUpload";
import PendingUpload from "./PendingUpload";
import { supabase } from "~/lib/subase";
import { toast } from "react-toastify";
import NoAction from "~/components/NoAction";
import { api } from "~/api/api";
import { upload } from "@imagekit/react";

export function AdminAddProducts() {
  const [bulkOperation, setBulkOperation] = useState(false);
  const [productInfo, setProductInfo] = useState(defaultProduct);
  const style =
    "w-full focus:outline-none mr-2 my-2 shadow bg-white rounded-lg  p-6";
  const style1 =
    "w-full focus:outline-none my-2  shadow bg-white rounded-lg  p-6";

  const [addedImage, setAddedImage] = useState([]);
  const [addedFile, setAddedFile] = useState([]);

  async function addProduct(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(addedFile);
    const { data, error } = await supabase
      .from("products")
      .insert(pendingProduct)
      .select();
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      setPendingProduct([]);
    }
  }

  const [pendingProduct, setPendingProduct] = useState([]);
  function addItem() {
    // setPendingProduct({ ...productInfo, src: addedImage });
    if (addedFile.length == 0) {
      toast.warning(
        "image uploader is still loading.., kindly wait for a few seconds"
      );
      return;
    }
    const date = new Date();
    setPendingProduct((prev) => [
      ...prev,
      {
        ...productInfo,
        src: addedImage,
        files: addedFile,
        folder: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
      },
    ]);
    console.log(pendingProduct);
    setProductInfo(defaultProduct);
    setAddedImage([]);
    setAddedFile([]);
  }
  return (
    <form onSubmit={addProduct} className="flex flex-col items-center">
      <div className="flex w-full justify-between">
        <div className="w-140">
          <textarea
            contentEditable
            value={productInfo.name}

            onChange={(e) =>
              setProductInfo((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Name *"
            className={style}
          />

          <div className="flex">
            <input
              type="number"
              placeholder="Price *"
              value={productInfo.price}

              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  price: e.target.value,
                }))
              }
              className={style}
            />
            <input
              value={productInfo.discount}
              type="number"
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  discount: e.target.value,
                }))
              }
              placeholder="Price Before (optional)"
              className={style1}
            />
          </div>
          <div className="flex relative">
            <input
              type="number"
              value={productInfo.width}

              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  width: e.target.value,
                }))
              }
              placeholder="Width *"
              className={style}
            />
            <input
              type="text"
              value={productInfo.height}

              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  height: e.target.value,
                }))
              }
              placeholder="Height *"
              className={style}
            />
            <input
              value={productInfo.ram}

              type="text"
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  ram: e.target.value,
                }))
              }
              placeholder="RAM Size"
              className={style1}
            />
          </div>
          <div className="flex relative">
            <input
              type="text"
              value={productInfo.isSSD}
              placeholder="SSD OR HDD *"
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  isSSD: e.target.value,
                }))
              }
              className={style}
            />
            <input
              value={productInfo.waranty}

              type="text"
              placeholder="Waranty *"
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  waranty: e.target.value,
                }))
              }
              className={style}
            />
            <input
              type="text"
              placeholder="Rate"
              value={productInfo.rate}

              className={style1}
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  rate: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex relative">
            <input
              type="text"
              value={productInfo.storage}

              placeholder="Storage ()*"
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  storage: e.target.value,
                }))
              }
              className={style}
            />
            <input
              type="text"
              value={productInfo.brand}

              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  brand: e.target.value,
                }))
              }
              placeholder="Brand * DELL"
              className={style}
            />
            <input
              type="text"
              placeholder="Year of production"
              className={style1}
              value={productInfo.year}

              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  year: e.target.value,
                }))
              }
            />
          </div>
          <p>
            Click to select or not,{" "}
            <span className="text-red-500">No is selected by default</span>
          </p>
          <div className={`${style1} flex items-center`}>
            <input
              type="checkbox"

              className="size-8  cursor-pointer"
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  touch: e.target.checked,
                }))
              }
              id="touch"
            />
            <label htmlFor="touch" className=" cursor-pointer">
              Touch Screen
            </label>
            <input
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  finger: e.target.checked,
                }))
              }
              type="checkbox"
              className="size-8 ml-2 cursor-pointer"
              id="fingerPrint"
            />
            <label htmlFor="fingerPrint" className="ml-2 cursor-pointer">
              Finger print
            </label>
            <input
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  face: e.target.checked,
                }))
              }
              type="checkbox"
              className="size-8 ml-4 cursor-pointer"
              id="faceId"
            />
            <label htmlFor="faceId" className="ml-2 cursor-pointer">
              Face ID
            </label>
          </div>
        </div>
        <div>
          {pendingProduct.length > 0 && (
            <PendingUpload
              pendingProduct={pendingProduct}
              setProductInfo={setProductInfo}
              setPendingProduct={setPendingProduct}
              setAddedImage={setAddedImage}
            />
          )}
          <ImageUpload
            addedImage={addedImage}
            setAddedFile={setAddedFile}
            setAddedImage={setAddedImage}
          />
          <div
            onClick={addItem}
            className="bg-primary cursor-pointer w-max rounded-2xl py-3 px-8 text-white"
          >
            Add item
          </div>
        </div>
      </div>
      {bulkOperation && <NoAction />}
      {pendingProduct.length > 0 ? (
        <button
          className="bg-primary rounded-2xl px-8 py-3 w-max text-white font-bold"
          type="submit"
        >
          Continue Bulk Operation
        </button>
      ) : (
        <div className="bg-gray-500 cursor-not-allowed rounded-2xl px-8 py-3 w-max text-white font-bold">
          Continue Bulk Operation
        </div>
      )}
    </form>
  );
}
