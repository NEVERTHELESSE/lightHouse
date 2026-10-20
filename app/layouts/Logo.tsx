import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/" className="flex">
      <img
        src="/logo.png"
        alt=""
        className="size-8 sm:size-12  object-cover mr-2 rounded-lg "
      />
      <div className="hidden lg:flex flex-col justify-between">
        <h2 className="text-2xl font-bold">
          LightHouse
          <span className="text-white animate-pulse ml-2">ICT</span>
        </h2>
        <p className="leading-2">GADGET MALL</p>
      </div>
    </Link>
  );
}
