// src/components/SidebarRight/ContactsSection.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typography } from "@/components/ui/Typography";
import { Link } from "react-router-dom";

type Contact = {
  id: number;
  name: string;
  online: boolean;
  avatarUrl: string;
};

const contacts: Contact[] = [
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
];

export default function ContactsSection() {
  return (
    <div className="space-y-3">
      <Typography variant="h3" className="mb-2">
        Contacts
      </Typography>
      {contacts.map((c) => (
        <Link
          to={`/messages/${c.id}`}
          key={c.id}
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition"
        >
          <div className="relative">
            <Avatar>
              <AvatarImage src={c.avatarUrl} alt={c.name} />
              <AvatarFallback>{c.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {c.online && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-black rounded-full"></span>
            )}
          </div>
          <Typography variant="body">{c.name}</Typography>
        </Link>
      ))}
    </div>
  );
}
