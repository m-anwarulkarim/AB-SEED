import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label: string;
}

export default function NavItem({ to, icon, label }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex flex-col items-center text-xs sm:text-sm lg:text-base flex-shrink-0 min-w-max
        ${
          isActive
            ? "text-green-600 font-semibold"
            : "text-gray-700 hover:text-green-600"
        }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
