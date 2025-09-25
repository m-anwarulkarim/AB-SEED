import { Link, useLocation } from "react-router-dom";
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

export default function MobileNav() {
  const location = useLocation();

  const navItems = [
    { label: "", extra: true, to: "/" },
    {
      label: "সকল পণ্য",
      icon: <FaStore className="h-5 w-5 sm:h-6 sm:w-6" />,
      to: "/all",
    },
    {
      label: "অর্ডার কার্ট",
      icon: <FaShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />,
      to: "/cart",
    },
    {
      label: "নতুন অফার",
      icon: <FaBullhorn className="h-5 w-5 sm:h-6 sm:w-6" />,
      to: "/offers",
    },
    {
      label: "নোটিফিকেশন",
      icon: <FaBell className="h-5 w-5 sm:h-6 sm:w-6" />,
      to: "/notifications",
    },
    {
      label: "প্রোফাইল",
      icon: <FaUser className="h-5 w-5 sm:h-6 sm:w-6" />,
      to: "/profile",
    },
  ];

  return (
    <nav className="flex flex-wrap justify-center gap-3 sm:gap-4  overflow-x-auto px-1 no-scrollbar">
      {navItems.map((item, idx) => {
        const isActive = location.pathname === item.to;

        return (
          <Link
            key={idx}
            to={item.to}
            className={`flex flex-col items-center text-xs sm:text-sm min-w-max flex-shrink-0
              ${
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-700 hover:text-green-600"
              }`}
          >
            {item.extra ? (
              <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11">
                <div className="absolute top-0 left-1 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border bg-white">
                  <FaCommentDots className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border bg-white">
                  <FaThumbsUp className="w-2 h-2 sm:w-3 sm:h-3" />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border bg-white">
                  <FaHeart className="w-2 h-2 sm:w-3 sm:h-3" />
                </div>
              </div>
            ) : (
              item.icon
            )}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
