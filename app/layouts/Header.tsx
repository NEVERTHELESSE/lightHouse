import HeaderUser from "./HeaderUser";
import Logo from "./Logo";
import { Search } from "./Search";

export default function Header() {
  return (
    <header className="w-screen top flex items-center p-2 shadow-lg top-0 lg:py-4 lg:px-12 justify-between fixed z-50 bg-white">
      <div className="h-1 w-0 pageScroll bg-linear-20 from-primary to-secondary fixed left-0 top-0"></div>
      <Logo />
      <Search />
      <HeaderUser />
    </header>
  );
}
