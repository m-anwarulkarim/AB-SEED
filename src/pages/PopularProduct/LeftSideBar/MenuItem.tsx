// src/components/Sidebar/MenuItem.tsx
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type MenuItemProps = {
  icon: React.ElementType;
  label: string;
  path: string;
};

export default function MenuItem({ icon: Icon, label, path }: MenuItemProps) {
  return (
    <Link
      to={path}
      className={cn(
        "flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition text-sm font-medium"
      )}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  );
}
