import { FaArrowRight } from "react-icons/fa";

export default function Explore() {
  return (
    <div className="md:flex justify-between w-full p-2 md:p-10">
      <div className="md:w-[49%] bg-black text-white rounded-2xl mdflex items-center justify-between">
        <div className=" p-10 md:w-[50%]">
          <h3 className="text-4xl font-bold ">GAMING Laptops Built to WIn</h3>
          <h4 className="my-3">
            High FPS, Faster Response, Ultimate Performance.
          </h4>
          <button className="bg-white  rounded-full py-3 px-10 text-black font-bold flex items-center">
            Explore Gaming Laptop
            <FaArrowRight className="ml-3" />
          </button>
        </div>
        <img src="/img/laptop2.png" className="md:w-[49%]" alt="" />
      </div>
      <div className="md:w-[49%] overflow-hidden  shadow box rounded-2xl md:flex items-center justify-between">
        <div className=" p-10 md:w-[50%]">
          <h3 className="text-4xl font-bold ">Thin. Light. Powerful.</h3>
          <h4 className="my-3">
            Premium Lapfor for work, travel and everything in between
          </h4>
          <button className="bg-white p-2 w-full md:w-max box rounded-full sm:py-3 sm:px-10 text-black font-bold flex items-center">
            Browse Light Weight
            <FaArrowRight className="ml-3" />
          </button>
        </div>
        <img
          src="/img/laptop1.png"
          className="md:w-[49%] object-cover h-full"
          alt=""
        />
      </div>
    </div>
  );
}
