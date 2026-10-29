import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router";
import SendMessage from "./SendMessage";

export default function GetInTouch() {
  return (
    <div className="shadow-lg border-t border-t-soft  justify-around md:flex p-4 sm:p-8 glow rounded-2xl my-8">
      <div className="w-full md:w-100  p-4 shadow-lg rounded-2xl">
        <h3 className="gradient">LET'S CONNECT</h3>
        <div>
          <h3>
            Have a project in mind?
            <br />
            Let's Create Something amazing together
          </h3>
          <div>
            <div className="flex items-center my-4">
              <FaEnvelope size={35} className="shadow-lg p-1 rounded-lg" />
              <Link to={`gmail`} className="ml-2">
                neverthelesse21@gmail.com
              </Link>
            </div>
            <div className="flex items-center my-4">
              <FaPhone size={35} className="shadow-lg p-1 rounded-lg" />
              <Link to={`gmail`} className="ml-2">
                +234 9051 602 536
              </Link>
            </div>
            <div className="flex items-center my-4">
              <FaPhone size={35} className="shadow-lg p-1 rounded-lg" />
              <Link to={`gmail`} className="ml-2">
                Oyo, Ibadan, Nigeria.
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SendMessage />
    </div>
  );
}
