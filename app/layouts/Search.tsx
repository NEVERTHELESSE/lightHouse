import { FiSearch } from "react-icons/fi";

export function Search() {
  return (
    <form
      action="post"
      className="lg:w-[40%]  py-1 items-center bg-[#dadada5b] rounded-2xl sm:rounded-full pr-1 pl-3 flex"
    >
      <FiSearch />
      <input type="text" placeholder="Search Gadget" className="w-full ml-2" />
      <button className="bg-primary rounded-lg sm:rounded-full p-1 lg:p-4 ">
        <FiSearch />
      </button>
    </form>
  );
}
