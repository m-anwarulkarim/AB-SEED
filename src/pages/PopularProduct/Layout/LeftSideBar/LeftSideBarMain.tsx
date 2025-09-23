// src/components/Sidebar/SidebarLeft.tsx
import ProfileSection from "./ProfileSection";
import MenuList from "./MenuList";

export default function SidebarLeft() {
  return (
    <aside className="w-72 p-4 space-y-4 overflow-y-auto h-screen  ">
      {/* User Info */}
      <ProfileSection name="Anwarul Karim" avatarUrl="/avatars/me.png" />

      {/* Menu Items */}
      <MenuList />
    </aside>
  );
}
