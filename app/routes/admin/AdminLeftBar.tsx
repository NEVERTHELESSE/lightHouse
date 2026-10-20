import { MdMenu } from "react-icons/md";
import Logo from "~/layouts/Logo";

export default function AdminLeftBar() {
  const options = [
    { id: "1", title: "Dashboard", icon: <MdMenu /> },
    { id: "2", title: "Products", icon: <MdMenu /> },
    { id: "3", title: "Orders", icon: <MdMenu /> },
    { id: "4", title: "Users", icon: <MdMenu /> },
  ];
  return (
    <nav className="border bg-white border-gray-300 py-4  rounded-r-4xl   w-80 shadow">
      <div className="p-2">
        <Logo />
      </div>
      {options.map(({ id, icon, title }) => (
        <div
          key={id}
          className="flex border-t border-gray-300 my-4 items-center p-4"
        >
          <div className="flex items-center" key={id}>
            {icon}
            <span className="mx-2">{title}</span>
          </div>
        </div>
      ))}
    </nav>
  );
}
