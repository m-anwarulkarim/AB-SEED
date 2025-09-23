// src/components/Feed/CreatePost/CreatePostBox.tsx
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CreatePostOptions from "./CreatePostOptions";

export default function CreatePostBox() {
  return (
    <Card className="p-4 space-y-4">
      {/* Top section: Avatar + Input */}
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="/avatars/me.png" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 rounded-full bg-muted px-4 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Bottom section: Options */}
      <CreatePostOptions />
    </Card>
  );
}
