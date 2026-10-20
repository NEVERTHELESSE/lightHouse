import { BiUserCircle } from "react-icons/bi";
import { FaPhone, FaShoppingCart, FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="w-full h-screen px-2 py-6 lg:pl-15 pt-20 md:pt-30 bg-linear-0 from-blue-200 to-primary  overflow-hidden flex-col flex ">
      <div className="md:flex h-120 mr-4 justify-between">
        <div className="md:w-[45%]  flex flex-col justify-around">
          <div className="bg-green-300 text-secondary font-bold shadow  w-max p-2 rounded-lg flex items-center">
            <FaStar className="mr-2" />
            Both Brand New & UK Use
          </div>
          <h3 className="text-3xl lg:text-5xl  font-bold">
            Power Your Next <br />
            <span>Big Ideas</span>
          </h3>
          <h4 className="flex text-2xl lg:text-4xl my-3 sm:my-0 items-center">
            Laptop for
            <span className=" ml-4 font-bold text-secondary">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Gaming",
                  3000, // wait 1s before replacing "Mice" with "Hamsters"
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
          <h4 className="text-2xl  font-bold">
            Discover the trusted Laptops & Phones{" "}
            <br className="hidden lg:flex" />
            <span className="font-bold text-secondary">
              at prices that work for you.
            </span>
          </h4>
          <div className="flex my-4">
            <button className="flex w-max text-white bg-primary font-bold p-2 lg:py-4 items-center lg:px-8 rounded-2xl">
              <FaShoppingCart className=" m-1 lg:mr-3 " />
              Shop Now
              <span>
                <FiArrowRight className=" m-1 lg" />
              </span>
            </button>
            <button className="flex ml-10 w-max border-white border-2 sm:font-bold p-2 lg:py-4 items-center  rounded-2xl">
              Explore Deals
              <span>
                <FaPhone className=" ml-2" />
              </span>
            </button>
          </div>
        </div>
        <div className="relative  md:w-[50%] h-80 md:h-full">
          {/* <div className="grad w-[100%] h-full absolute bg-white right-80"></div> */}
          <img
            src="/computer.png"
            className="w-full h-full object-cover rounded-3xl"
            alt=""
          />
        </div>
      </div>
      <div className="flex lg:p-0 mt-35 lg:mt-8 w-full lg:w-[70%] justify-between">
        <div className="flex items-center shadow bg-primary-300 text-white cover shadow-white px-2 py-3 md:px-6 rounded-lg ">
          <BiUserCircle className="lg:text-3xl mr-4" />
          <div>
            <h4 className="font-bold">Fast Shipping</h4>
            <p>Across Nigeria</p>
          </div>
        </div>
        <div className="flex items-center shadow shadow-white md:py-3 px-2 md:px-6 rounded-lg ">
          <BiUserCircle className="lg:text-3xl mr-4" />
          <div>
            <h4 className="font-bold">Secure Checkout</h4>
            <p>Protected Payment</p>
          </div>
        </div>
        <div className="flex items-center shadow shadow-white md:py-3 px-2 md:px-6 rounded-lg ">
          <BiUserCircle className="text-3xl mr-4" />
          <div>
            <h4 className="font-bold">Trusted Gadget</h4>
            <p>Quality Checked</p>
          </div>
        </div>
      </div>
    </section>
  );
}
