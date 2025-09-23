// src/components/Sidebar/MenuList.tsx
import { useState } from "react";
import MenuItem from "./MenuItem";
import { Button } from "@/components/ui/button";
import { menuItems } from "./menuItems";

export default function MenuList() {
  const [visibleCount, setVisibleCount] = useState(9);

  const visibleItems = menuItems.slice(0, visibleCount);
  const hasMore = visibleCount < menuItems.length;

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, menuItems.length));
  };

  const handleSeeLess = () => {
    setVisibleCount(9);
  };

  return (
    <div className="space-y-1">
      {visibleItems.map((item) => (
        <MenuItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          path={item.path}
        />
      ))}

      {hasMore ? (
        <Button
          variant="ghost"
          className="w-full justify-start text-sm font-medium"
          onClick={handleSeeMore}
        >
          See More
        </Button>
      ) : (
        menuItems.length > 9 && (
          <Button
            variant="ghost"
            className="w-full justify-start text-sm font-medium text-red-400"
            onClick={handleSeeLess}
          >
            See Less
          </Button>
        )
      )}
    </div>
  );
}
