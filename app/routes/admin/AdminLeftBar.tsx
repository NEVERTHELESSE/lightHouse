import { CgShoppingCart } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import Logo from "~/layouts/Logo";

export default function AdminLeftBar({ active, setActive }: any) {
  const options = [
    { id: "1", title: "dashboard", icon: <MdMenu /> },
    { id: "2", title: "products", icon: <FaComputer /> },
    { id: "3", title: "orders", icon: <CgShoppingCart /> },
    { id: "4", title: "users", icon: <FaUsers /> },
  ];

  return (
    <nav className="border bg-white border-soft py-4  rounded-r-4xl  mr-8 w-100 shadow">
      <div className="p-2 mb-6">
        <Logo />
      </div>
      {options.map(({ id, icon, title }) => (
        <button
          key={id}
          onClick={() => setActive(title)}
          className={`flex border-t capitalize text-2xl border-gray-300 w-full hover:bg-primary-300 ${active === title && "bg-primary text-white"} duration-300  items-center p-8`}
        >
          <div className="flex items-center" key={id}>
            {icon}
            <span className="mx-2">{title}</span>
          </div>
        </button>
      ))}
    </nav>
  );
}
