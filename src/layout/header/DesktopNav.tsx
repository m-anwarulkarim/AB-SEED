import {
  FaStore,
  FaShoppingCart,
  FaBullhorn,
  FaBell,
  FaUser,
  FaCommentDots,
  FaThumbsUp,
  FaHeart,
} from "react-icons/fa";
import NavItem from "./NavItem";

export default function DesktopNav() {
  return (
    <nav className="flex flex-nowrap justify-center gap-4 sm:gap-5 lg:gap-6 text-center flex-shrink-0">
      <NavItem
        to="/"
        icon={
          <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
            <div className="absolute top-0 left-1 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center rounded-full border bg-white">
              <FaCommentDots className="w-3 h-3 lg:w-4 lg:h-4" />
            </div>
            <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full border bg-white">
              <FaThumbsUp className="w-2 h-2 lg:w-3 lg:h-3" />
            </div>
            <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full border bg-white">
              <FaHeart className="w-4 h-4 lg:w-3 lg:h-3" />
            </div>
          </div>
        }
        label=""
      />
      <NavItem
        to="/all"
        icon={<FaStore className="h-6 w-6 lg:h-7 lg:w-7" />}
        label="সকল পণ্য"
      />
      <NavItem
        to="/cart"
        icon={<FaShoppingCart className="h-6 w-6 lg:h-7 lg:w-7" />}
        label="অর্ডার কার্ট"
      />
      <NavItem
        to="/offers"
        icon={<FaBullhorn className="h-6 w-6 lg:h-7 lg:w-7" />}
        label="নতুন অফার"
      />
      <NavItem
        to="/notifications"
        icon={<FaBell className="h-6 w-6 lg:h-7 lg:w-7" />}
        label="নোটিফিকেশন"
      />
      <NavItem
        to="/profile"
        icon={<FaUser className="h-6 w-6 lg:h-7 lg:w-7" />}
        label="প্রোফাইল"
      />
    </nav>
  );
}
