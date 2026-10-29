import { useState, type FormEvent, type ChangeEvent } from "react";
import { defaultProduct } from "~/data/admin/productDefault";
import type { productType } from "~/types/productType";
import { addProduct } from "./addProductFn";
import ImageUpload from "./ImageUpload";
import PendingUpload from "./PendingUpload";
import { addItem } from "./AddItemFn";
import { style, style1 } from "~/css/style";
type propT = {
  pendingProduct: any;
  setPendingProduct: any;
};
export default function AddProductPhone({
  pendingProduct,
  setPendingProduct,
}: propT) {
  const [productInfo, setProductInfo] = useState(defaultProduct);
  const [addedImage, setAddedImage] = useState([]);
  const [addedFile, setAddedFile] = useState([]);

  async function addsProduct(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await addProduct(addedFile, pendingProduct, setPendingProduct);
  }

  function updateInput(e: ChangeEvent<HTMLInputElement> | any) {
    setProductInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <form onSubmit={addsProduct} className="flex flex-col items-center">
      <div className="flex w-full justify-between">
        <div className="w-140">
          <textarea
            contentEditable
            value={productInfo.name}
            onChange={updateInput}
            name="name"
            placeholder="Name *"
            className={style}
          />

          <div className="flex">
            <input
              type="number"
              placeholder="Price *"
              value={productInfo.price}
              name="price"
              onChange={updateInput}
              className={style}
            />
            <input
              value={productInfo.discount}
              type="number"
              onChange={updateInput}
              name="discount"
              placeholder="Price Before (optional)"
              className={style1}
            />
          </div>
          <div className="flex relative">
            <input
              type="number"
              value={productInfo.width}
              onChange={updateInput}
              name="width"
              placeholder="Width *"
              className={style}
            />
            <input
              type="text"
              value={productInfo.height}
              onChange={updateInput}
              name="height"
              placeholder="Height *"
              className={style}
            />
            <input
              value={productInfo.ram}

              type="text"
              onChange={updateInput}
              name="ram"
              placeholder="RAM Size"
              className={style1}
            />
          </div>
          <div className="flex relative">
            <input
              value={productInfo.waranty}

              type="text"
              placeholder="Waranty *"
              onChange={updateInput}
              name="waranty"
              className={style}
            />
            <input
              type="text"
              placeholder="Rate"
              className={style}
              value={productInfo.rate}
              onChange={updateInput}
              name="rate"
            />
          </div>
          <div className="flex relative">
            <input
              type="text"
              value={productInfo.storage}

              placeholder="Storage ()*"
              onChange={updateInput}
              name="storage"
              className={style}
            />
            <input
              type="text"
              value={productInfo.brand}
              onChange={updateInput}
              name="brand"
              placeholder="Brand * Apple"
              className={style}
            />
            <input
              type="text"
              placeholder="Year of production"
              className={style1}
              value={productInfo.year}
              onChange={updateInput}
              name="year"
            />
          </div>
          <p>
            Click to select or not,{" "}
            <span className="text-red-500">No is selected by default</span>
          </p>
          <div className={`${style1} flex items-center`}>
            <input
              onChange={updateInput}
              name="finger"
              type="checkbox"
              className="size-8 ml-2 cursor-pointer"
              id="fingerPrint"
            />
            <label htmlFor="fingerPrint" className="ml-2 cursor-pointer">
              Finger print
            </label>
            <input
              onChange={updateInput}
              name="face"
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
          <ImageUpload
            addedImage={addedImage}
            setAddedFile={setAddedFile}
            setAddedImage={setAddedImage}
          />
          <div
            onClick={() =>
              addItem(
                addedFile,
                setPendingProduct,
                productInfo,
                pendingProduct,
                setProductInfo,
                setAddedImage,
                setAddedFile,
                "phone"
              )
            }
            className="bg-primary cursor-pointer w-max rounded-2xl py-3 px-8 text-white"
          >
            Add item
          </div>
        </div>
      </div>
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
