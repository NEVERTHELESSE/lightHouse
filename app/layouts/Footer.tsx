import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaPinterest,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router";
import { Developer } from "./Developer";

export default function Footer() {
  return (
    <footer className="w-full">
      <section className=" w-full md:flex justify-between shadow-lg rounded-2xl p-4">
        <div className="md:w-[25%]">
          <Logo />
          <h3 className="text-2xl my-6">Your Laptop. A Brighter Tommorrow</h3>
          <div className="flex text-3xl w-full justify-between">
            <Link to="https://www.instagram.com/lighthousect.2024">
              <FaInstagram />
            </Link>
            <Link to="https://www.titktok.com/lighthouseict">
              <FaTiktok />
            </Link>
            <Link to="https://www.instagram.com/lighthousect.2024">
              <FaFacebook />
            </Link>
            <Link to="https://www.instagram.com/lighthousect.2024">
              <FaYoutube />
            </Link>
            <Link to="https://www.instagram.com/lighthousect.2024">
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className="w-[20%] flex flex-col justify-around">
          <h4 className="font-bold">Quick Links</h4>
          <Link to="/">Home </Link>
          <Link to="/">Laptops </Link>
          <Link to="/">Phones</Link>
          <Link to="/">Support</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="w-[20%] justify-around flex flex-col">
          <h4 className="font-bold">Popular Categories</h4>
          <Link to="/">Business Laptop </Link>
          <Link to="/">Gaming Laptops </Link>
          <Link to="/">Student Laptop</Link>
          <Link to="/">Creator Laptop</Link>
          <Link to="/">Budget Laptop</Link>
        </div>
        <div className="w-[20%]  ">
          <h4 className="font-bold">Contact Us</h4>
          <div className="flex">
            <div className="h-50 flex flex-col justify-around">
              <FaLocationArrow />
              <FaPhone />
              <FaEnvelope />
              <FaClock />
            </div>
            <div className="flex flex-col mx-4 justify-around">
              <Link to={"https://maps.app.goo.gl/q6sGfsWcJP78agk26"}>
                Second Floor Coco House Ibadan
              </Link>
              <Link to={"https://wa.me/2347065945301"}> +234 706 594 5301</Link>
              <Link to={"mailto:lighthouseictibadan@gmail.com"}>
                {" "}
                lighthouseictibadan@gmail.com
              </Link>
              <Link to={""}>Mon - Sat</Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl rotate-45">
            Good <br />
            Laptops <br /> Brighter <br />
            Futures
          </h3>
        </div>
      </section>
      <Developer />
    </footer>
  );
}
