import { useState } from "react";
import { topPicks } from "~/data/topPick";
import ProductLoading from "~/loading/ProductLoading";
import Items from "./Items";
import Selection from "~/components/Selection";

export default function TopPick() {
  const lists = [1, 2, 3, 4, 5];
  const [active, setActive] = useState("laptop");
  const renderProduct = topPicks.filter(
    (product) => product.category == active
  );
  return (
    <div className="p-2 m-2 md:my-10 md:p-10">
      <div className="md:flex justify-between items-center">
        <div>
          <h4 className="text-secondary font-bold">SHOP BY CATEGORY</h4>
          <span className="md:text-5xl my-15 font-bold ">Top Pick</span>
        </div>
        <h3 className="text-2xl font-bold uppercase">{active}</h3>
        <Selection active={active} setActive={setActive} />
      </div>
      {renderProduct.length == 0 ? (
        <ProductLoading />
      ) : (
        <div className="flex flex-wrap justify-between w-full">
          {renderProduct.map((product) => (
            <Items {...product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}
