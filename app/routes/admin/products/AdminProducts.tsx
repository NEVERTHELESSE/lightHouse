import { useState } from "react";
import AdminProductSelection from "../AdminProductSelection";
import { options } from "~/data/data";
import { AdminAddProducts } from "./AdminAddProducts";

export default function AdminProducts() {
  const [active, setActive] = useState("laptop");

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <AdminProductSelection active={active} setActive={setActive} />
      </div>
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
      <AdminAddProducts />
    </div>
  );
}
