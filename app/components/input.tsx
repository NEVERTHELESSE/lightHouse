import type { ChangeEvent } from "react";
import { style } from "~/css/style";

type InputT = {
  info: {
    type: string;
    placeHolder: string;
  };
};
export default function Input({
  info,
  setProductInfo,
  productInfo,
  name,
  type,
}: any) {
  function updateInput(e: ChangeEvent<HTMLInputElement> | any) {
    setProductInfo((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <input
      {...info}
      // type="number"
      // placeholder="Price *"
      // value={productInfo.price}
      // name="price"
      // onChange={updateInput}
      // className={style}
    />
  );
}
