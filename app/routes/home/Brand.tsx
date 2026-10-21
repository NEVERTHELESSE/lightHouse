import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { brands } from "~/data/brand";

export default function Brand() {
  // const [left, setLeft] = useState(0)
  //   useEffect(()=>{
  // const scrollLeft = setInterval(()=>{
  // setLeft(100)
  // },1000)
  //   },[])
  const style = "text-3xl text-right text-gray-500 font-bold my-5";
  return (
    <div className="w-full">
      {/* <h3 className={style}>Browse by brands</h3> */}
      <div className="p-10  flex shadow items-center w-full justify-between">
        {brands.map((brand) => (
          <Link
            to={`/brands/${brand}`}
            key={brand}
            className="border  border-transparent hover:border-primary duration-200 p-3 rounded-lg cursor-pointer"
          >
            <img
              src={`/brand/${brand}`}
              className=" object-contain size-20"
              alt={brand}
            />
            <p className="uppercase text-center font-bold text-primary">
              {brand.split(".")[0]}
            </p>
          </Link>
        ))}
      </div>
      {/* <h3 className={style}>Browse by brands</h3>

      <div className="p-10 moveRight flex shadow items-center w-full justify-between">
        {brands.map((brand) => (
          <Link
            to={`/brand`}
            key={brand}
            className="border  border-transparent hover:border-primary duration-200 p-3 rounded-lg cursor-pointer"
          >
            <img
              src={`/brand/${brand}`}
              className=" object-contain size-20"
              alt={brand}
            />
            <p className="uppercase text-center font-bold text-primary">
              {brand.split(".")[0]}
            </p>
          </Link>
        ))}
      </div> */}
    </div>
  );
}
