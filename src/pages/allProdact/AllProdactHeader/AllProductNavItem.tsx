import { NavLink } from "react-router-dom";

interface AllProductNavItemProps {
  name: string;
  path: string;
}

export default function AllProductNavItem({
  name,
  path,
}: AllProductNavItemProps) {
  return (
    <NavLink
      to={path}
      end={path === "/all"} // শুধু "সব" এর জন্য exact match
      className={({ isActive }) =>
        `px-4 py-1.5 rounded-md text-sm transition-colors border 
        ${
          isActive
            ? "bg-green-600 text-white border-green-700 font-semibold"
            : "bg-white text-black border-gray-400 hover:bg-gray-100"
        }`
      }
    >
      {name}
    </NavLink>
  );
}
