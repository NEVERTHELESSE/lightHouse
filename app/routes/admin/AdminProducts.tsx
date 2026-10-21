import { useState } from "react";
import AdminProductSelection from "./AdminProductSelection";
import { options } from "~/data/data";

export default function AdminProducts() {
  const [active, setActive] = useState("add Product");
  const style =
    "w-full focus:outline-none mr-2 my-2 shadow bg-white rounded-lg  p-6";
  const style1 =
    "w-full focus:outline-none my-2  shadow bg-white rounded-lg  p-6";
  return (
    <div className="p-4">
      <AdminProductSelection active={active} setActive={setActive} />

      <div className="flex my-2 items-center">
        <select
          className="py-3 mr-3 px-8 border  rounded-2xl"
          name="type"
          id="type"
        >
          {options.map((option) => (
            <option className="capitalize p-2 " key={option} value="">
              {option}
            </option>
          ))}
        </select>
        <p>Change the product upload type, Laptop is selected by default</p>
        <p className="ml-3 text-red-600 font-bold">
          Note: Field that contain (*) are require
        </p>
      </div>
      <form action="post">
        <div className="w-140">
          <input type="text" placeholder="Name *" className={style} />
          <div className="flex">
            <input type="text" placeholder="Price *" className={style} />
            <input
              type="text"
              placeholder="Price Before (optional)"
              className={style1}
            />
          </div>
          <div className="flex relative">
            <input type="text" placeholder="Width *" className={style} />
            <input type="text" placeholder="Height *" className={style} />
            <input type="text" placeholder="RAM Size" className={style1} />
          </div>
          <div className="flex relative">
            <input type="text" placeholder="Storage ()*" className={style} />
            <input type="text" placeholder="Brand * DELL" className={style} />
            <input
              type="text"
              placeholder="Year of production"
              className={style1}
            />
          </div>
          <p>No is selected by default</p>
          <div className="flex">
            <input type="checkbox" />
          </div>
        </div>
      </form>
    </div>
  );
}
