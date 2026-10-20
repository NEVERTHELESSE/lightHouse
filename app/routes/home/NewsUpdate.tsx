import {
  FaArrowRight,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function NewsUpdate() {
  return (
    <div className="bg-linear-50 text-white w-full p-4 md:p-15 from-tertiary to-secondary relative md:flex ic">
      <div className="md:w-[50%]">
        <h5 className="text-2xl">STAY UPDATED</h5>
        <h3 className="text-4xl">
          Exclusive Deals. News Launches. Expect Tips.
        </h3>
        <p>
          Subscribe to get the lastest offers, laptops guides and tech updates
        </p>
      </div>
      <form
        action="post"
        className=" h-max pz-2 md:px-10 md:w-[50%] bg-gray-400 flex items-center rounded-full"
      >
        <FaEnvelope className="ml-4" />
        <input
          type="email"
          className="size-full p-2 md:py-6 focus:outline-0 px-3"
          placeholder="Enter your Email Address"
        />
        <button className="absolute md:px-8 md:py-3 bg-tertiary text-white font-bold right-20 rounded-full flex justify-center items-center">
          {" "}
          Subscribe <FaArrowRight className="md:ml-5" />
        </button>
      </form>
    </div>
  );
}
