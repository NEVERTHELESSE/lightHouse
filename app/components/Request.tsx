import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

export default function Request() {
  return (
    <Link
      to={`https://wa.me/2347065945301?text=Hello%20LightHouse%20I%20want%20make%20toan%20request%20for%20`}
      className="fixed bottom-3 z-50 right-3 flex text-white font-bold items-center bg-secondary rounded-2xl box p-2 animate-bounce cursor-pointer "
    >
      <FaWhatsapp />
      <span className="ml-2">Request for a Gadget</span>
    </Link>
  );
}
