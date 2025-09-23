// src/components/Sidebar/menuItems.ts
import {
  Users,
  Video,
  Store,
  Gamepad,
  Calendar,
  Bookmark,
  History,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

export type MenuItemType = {
  id: number;
  icon: React.ElementType;
  label: string;
  path: string;
};

export const menuItems: MenuItemType[] = [
  { id: 1, icon: Users, label: "Friends", path: "/friends" },
  { id: 2, icon: Video, label: "Videos", path: "/videos" },
  { id: 3, icon: Store, label: "Marketplace", path: "/marketplace" },
  { id: 4, icon: Gamepad, label: "Gaming", path: "/gaming" },
  { id: 5, icon: Calendar, label: "Events", path: "/events" },
  { id: 6, icon: Bookmark, label: "Saved", path: "/saved" },
  { id: 7, icon: History, label: "Memories", path: "/memories" },
  { id: 8, icon: Settings, label: "Settings", path: "/settings" },
  { id: 9, icon: HelpCircle, label: "Help & Support", path: "/help" },
  { id: 10, icon: LogOut, label: "Logout", path: "/logout" },
  // চাইলে এখানে আরও মেনু যোগ করতে পারো
];
