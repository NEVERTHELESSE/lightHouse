import { FaArrowRight } from "react-icons/fa";
import { brands } from "~/data/brand";

export default function Brand() {
  return (
    <div className="p-10 flex shadow items-center w-full justify-between">
      {brands.map((brand) => (
        <div key={brand} className="hover:bg-primary cursor-pointer">
          <img
            src={`/brand/${brand}`}
            className=" object-contain size-20"
            alt={brand}
          />
          <p className="uppercase text-center font-bold text-primary">
            {brand.split(".")[0]}
          </p>
        </div>
      ))}
      <button className="flex items-center font-bold ">
        Views All Brands
        <FaArrowRight className="ml-2 " />
      </button>
    </div>
  );
}
