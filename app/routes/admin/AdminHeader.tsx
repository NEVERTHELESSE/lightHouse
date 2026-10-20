import { FaBell } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

export default function AdminHeader() {
  return (
    <div className="ml-4 flex items-center justify-between w-full bg py-4 ">
      <div className="flex items-center">
        <form
          action=""
          className="shadow bg-white w-100 rounded-2xl pl-4 flex items-center"
        >
          <FiSearch />
          <input
            type="search"
            placeholder="Search"
            className="ml-2 py-6 focus:outline-none pr-4 w-full h-full"
          />
        </form>
        <h4 className="ml-2 text-primary font-bold">
          Today, Monday 21st Oct 2026
        </h4>
      </div>
      <div className="flex items-center ">
        <button className="shadow mx-4 bg-white p-4 rounded-lg">
          <FaGear />
        </button>
        <button className="shadow mx-4 p-4 bg-white rounded-lg">
          <FaBell />
        </button>
        <div className="size-10 overflow-hidden shadow bg-primary rouded-full mx-4 rounded-full">
          <img src="/neverthelesse.png" alt="" />
        </div>
      </div>
    </div>
  );
}
