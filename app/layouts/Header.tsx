import HeaderUser from "./HeaderUser";
import Logo from "./Logo";
import { Search } from "./Search";

export default function Header() {
  return (
    <header className="w-screen  flex items-center p-2 shadow-lg  lg:py-4 lg:px-12 justify-between fixed z-50 bg-white">
      <Logo />
      <Search />
      <HeaderUser />
    </header>
  );
}
