import { FaPhone, FaShoppingCart, FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import HeroInfo from "./HeroInfo";

export default function Hero() {
  return (
    <section className="w-full h-screen px-2 py-6 lg:pl-15 pt-20 md:pt-30 bg-[#e0f2fe] overflow-hidden flex-col flex ">
      <div className="md:flex h-160 mr-4 justify-between">
        <div className="md:w-[45%]  flex flex-col justify-around">
          <div className="bg-green-300 text-secondary font-bold shadow  w-max p-2 rounded-lg flex items-center">
            <FaStar className="mr-2" />
            Both Brand New & UK Use
          </div>
          <h3 className="text-3xl lg:text-7xl font-extrabold">
            Power Your Next <br />
            <span className="text-secondary">Big Ideas</span>
          </h3>
          <h4 className="flex text-2xl lg:text-5xl my-3 sm:my-0 items-center">
            Laptop for
            <span className=" ml-4 font-bold text-secondary">
              <TypeAnimation
                sequence={[
                  "Gaming",
                  3000,
                  "Design",
                  3000,
                  "Programing ",
                  3000,
                  "Editing",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "rem", display: "flex" }}
                repeat={Infinity}
              />
            </span>
          </h4>
          <h4 className="text-2xl lg:text-3xl  font-bold">
            Discover the trusted Laptops & Phones{" "}
            <br className="hidden lg:flex" />
            <span className="font-bold text-secondary">
              at prices that work for you.
            </span>
          </h4>
          <div className="flex my-4">
            <button className="flex w-max text-white bg-primary font-bold p-2 lg:py-6  hover:bg-secondary duration-200 items-center lg:px-12 rounded-2xl">
              <FaShoppingCart className=" m-1 lg:mr-3 " />
              Shop Now
              <span>
                <FiArrowRight className=" m-1 lg" />
              </span>
            </button>
            <button className="flex ml-10 w-max border-secondary border-2 sm:font-bold p-2 hover:bg-secondary hover:text-white duration-200 lg:px-12 lg:py-6 items-center  rounded-2xl">
              Explore Deals
              <span>
                <FaPhone className=" ml-2" />
              </span>
            </button>
          </div>
        </div>
        <img
          src="/computer.png"
          className="w-[50%] h-160 object-cover bg-green-500 rounded-3xl"
          alt=""
        />
      </div>
      <HeroInfo />
    </section>
  );
}
