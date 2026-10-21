import { FaArrowRight, FaShoppingCart } from "react-icons/fa";
import { useParams, useSearchParams } from "react-router";
import { topPicks } from "~/data/topPick";
import Items from "../home/Items";
import { useEffect, useState } from "react";
import type { productType, topPicksType } from "~/types/productType";
import SingleProductLoading from "~/loading/SingleProductLoading";
import ProductInfo from "./ProductInfo";

export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const [imageUrl, setImageUrl] = useState("/img/laptop1.png");
  const [item, setItem] = useState<productType>({});

  useEffect(() => {
    setLoading(true);
    const params = searchParams.get("s");
    const goods = topPicks.find((r) => r.id == params);
    if (goods?.id) {
      setImageUrl(goods.src[0]);
      setItem(goods);
    }
    setLoading(false);
  }, [searchParams]);

  const lists = [
    "laptop1.png",
    "laptop2.png",
    "laptop3.png",
    "laptop4.png",
    "laptop5.png",
  ];
  return (
    <div className="py-14 md:py-40 px-5 flex  flex-col justify-between w-screen items-center">
      {loading ? (
        <SingleProductLoading />
      ) : (
        <div className="justify-around md:flex w-full">
          <div className="my-2 flex md:w-[50%] ">
            <img
              src={imageUrl}
              alt=""
              className="w-[80%] h-[50vh] md:h-[60vh] border object-contain sm:object-contain"
            />
            <div className="flex ml-4 flex-col justify-between">
              {item.src.map((list) => (
                <img
                  onClick={() => setImageUrl(list)}
                  src={list}
                  key={list}
                  className={`min-w-15 h-15 cursor-pointer border object-cover ${list == imageUrl && "border-2  p-1"}`}
                />
              ))}
            </div>
          </div>
          <ProductInfo {...item} />
        </div>
      )}
      <h3 className="text-3xl my-6 font-bold">More product from Dell</h3>
      <div className="flex justify-between flex-wrap">
        {topPicks.map((product) => (
          <Items {...product} />
        ))}
      </div>
    </div>
  );
}
