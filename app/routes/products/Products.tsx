import { useState } from "react";
import Selection from "~/components/Selection";
import { productD } from "~/data/brand";
import Items from "../home/Items";
import { topPicks } from "~/data/topPick";

export default function Products() {
  const [active, setActive] = useState("laptop");
  const renderProduct = topPicks.filter(
    (product) => product.category == active
  );
  const [select, setSelect] = useState("dell");
  return (
    <div className="py-30 px-10">
      <div className="flex">
        <div className="rounded-2xl mr-5 box  overflow-hidden flex flex-col w-40">
          {productD.map((p, i) => (
            <button
              onClick={() => setSelect(p)}
              key={p}
              className={`uppercase ${select == p && "bg-primary text-white"} text-left ${i !== productD.length - 1 && " border-b"} p-4 `}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="w-full">
          <Selection active={active} setActive={setActive} />
          <div className="flex flex-wrap my-4 mx-2 justify-between">
            {renderProduct.map((render) => (
              <Items {...render} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
