// src/components/Feed/Posts/PostHeader.tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";

type PostHeaderProps = {
  author: {
    name: string;
    avatar: string;
  };
  timeAgo?: string;
};

export default function PostHeader({ author, timeAgo }: PostHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      {/* Author Info */}
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{author.name}</p>
          <p className="text-xs text-muted-foreground">{timeAgo || "2h ago"}</p>
        </div>
      </div>

      {/* Options */}
      <button className="p-2 rounded-full hover:bg-accent">
        <MoreHorizontal className="h-5 w-5" />
      </button>
    </div>
  );
}
