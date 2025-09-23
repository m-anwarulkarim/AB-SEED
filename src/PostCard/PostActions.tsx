import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";

export default function PostActions() {
  return (
    <div className="flex justify-around border-t pt-2">
      <Button variant="ghost" size="sm" className="flex items-center gap-2">
        <ThumbsUp size={18} /> Like
      </Button>
      <Button variant="ghost" size="sm" className="flex items-center gap-2">
        <MessageCircle size={18} /> Comment
      </Button>
      <Button variant="ghost" size="sm" className="flex items-center gap-2">
        <Share2 size={18} /> Share
      </Button>
    </div>
  );
}
