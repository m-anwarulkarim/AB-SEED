// src/components/Sidebar/SidebarRight.tsx
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typography } from "@/components/ui/Typography";

type Friend = {
  id: number;
  name: string;
  avatarUrl: string;
  online: boolean;
};

export default function SidebarRight() {
  const friends: Friend[] = [
    {
      id: 1,
      name: "Abdullah Al Hasan",
      online: true,
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Furkan Jakarya",
      online: true,
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Ferdaus Rayhan",
      online: false,
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Abdullah Al Hasan",
      online: true,
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 5,
      name: "Furkan Jakarya",
      online: true,
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 6,
      name: "Ferdaus Rayhan",
      online: false,
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 7,
      name: "Abdullah Al Hasan",
      online: true,
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 8,
      name: "Furkan Jakarya",
      online: true,
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 9,
      name: "Ferdaus Rayhan",
      online: false,
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 10,
      name: "Abdullah Al Hasan",
      online: true,
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 12,
      name: "Furkan Jakarya",
      online: true,
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 13,
      name: "Ferdaus Rayhan",
      online: false,
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 14,
      name: "Ferdaus Rayhan",
      online: false,
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 15,
      name: "Ferdaus Rayhan",
      online: false,
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 16,
      name: "Ferdaus Rayhan",
      online: false,
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <aside className="w-72 p-4 space-y-4 border-l sticky top-0  h-screen overflow-y-auto">
      <Typography variant="h3" className="mb-2">
        Friends
      </Typography>

      <div className="space-y-3">
        {friends.map((friend) => (
          <Link
            key={friend.id}
            to={`/messages/${friend.id}`}
            className="flex items-center gap-3 hover:bg-accent p-2 rounded-lg transition"
          >
            <div className="relative">
              <Avatar>
                <AvatarImage src={friend.avatarUrl} alt={friend.name} />
                <AvatarFallback>{friend.name[0]}</AvatarFallback>
              </Avatar>
              {friend.online && (
                <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              )}
            </div>
            <Typography variant="body">{friend.name}</Typography>
          </Link>
        ))}
      </div>
    </aside>
  );
}
