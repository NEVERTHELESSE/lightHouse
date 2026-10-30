import { CgShoppingCart } from "react-icons/cg";
import { FaShoppingBag, FaUsers } from "react-icons/fa";
import { FaComputer, FaTrashArrowUp } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router";
import Logo from "~/layouts/Logo";

export default function AdminLeftBar({ active, setActive }: any) {
  const options = [
    { id: "1", title: "dashboard", to: "#dashboard", icon: <MdMenu /> },
    { id: "2", title: "add products", to: "#addProduct", icon: <FaComputer /> },
    { id: "3", title: "orders", to: "#orders", icon: <CgShoppingCart /> },
    { id: "4", title: "users", to: "#users", icon: <FaUsers /> },
    {
      id: "5",
      title: "all products",
      to: "#allProduct",
      icon: <FaShoppingBag />,
    },
    {
      id: "6",
      title: "draft",
      to: "#draft",
      icon: <FaTrashArrowUp />,
    },
  ];

  return (
    <div className="w-100 h-full">
      <nav className="border bg-white fixed border-soft py-4 w-80 h-full rounded-r-4xl   shadow">
        <div className="p-2 mb-6">
          <Logo />
        </div>
        {options.map(({ id, to, icon, title }) => (
          <Link
            to={`/admin${to}`}
            key={id}
            onClick={() => setActive(to)}
            className={`flex border-t capitalize text-2xl border-gray-300 w-full hover:bg-primary-300 ${active === to && "bg-primary text-white"} duration-300  items-center p-8`}
          >
            <div className="flex items-center" key={id}>
              {icon}
              <span className="mx-2">{title}</span>
            </div>
          </Link>
        ))}
      </nav>
      <div className="w-83 h-full "></div>
    </div>
  );
}
