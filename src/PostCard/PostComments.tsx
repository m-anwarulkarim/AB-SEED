// src/components/Feed/Posts/PostComments.tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Comment = {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  text: string;
};

export default function PostComments() {
  const comments: Comment[] = [
    {
      id: 1,
      user: { name: "John Doe", avatar: "https://i.pravatar.cc/150?img=10" },
      text: "Nice post!",
    },
    {
      id: 2,
      user: { name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=20" },
      text: "Totally agree 💯",
    },
  ];

  return (
    <div className="space-y-3 pt-3">
      {comments.map((c) => (
        <div key={c.id} className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={c.user.avatar} alt={c.user.name} />
            <AvatarFallback>{c.user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="bg-accent p-2 rounded-xl text-sm">
            <p className="font-medium">{c.user.name}</p>
            <p>{c.text}</p>
          </div>
        </div>
      ))}

      {/* Add Comment Box */}
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/avatars/me.png" alt="You" />
          <AvatarFallback>Y</AvatarFallback>
        </Avatar>
        <input
          type="text"
          placeholder="Write a comment..."
          className="w-full text-sm border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>
  );
}
