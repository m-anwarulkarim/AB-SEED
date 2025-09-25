import Logo from "./Logo";
import SearchHelp from "./SearchHelp";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-4 py-3">
        {/* Desktop Layout */}
        <div className="hidden xl:flex items-center justify-between w-full">
          <Logo />
          <DesktopNav />
          <SearchHelp />
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col xl:hidden gap-3">
          <div className="flex items-center justify-between w-full">
            <Logo />
            <SearchHelp />
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
