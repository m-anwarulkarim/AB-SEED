import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label: string;
}

export default function NavItem({ to, icon, label }: NavItemProps) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center text-xs sm:text-sm lg:text-base text-gray-700 hover:text-green-600 flex-shrink-0 min-w-max"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
