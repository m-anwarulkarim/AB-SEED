// src/components/Feed/Posts/PostCard.tsx
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostEngagement from "./PostEngagement";
import PostActions from "./PostActions";
import PostComments from "./PostComments";

type PostCardProps = {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: {
    text: string;
    mediaUrl?: string;
  };
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
};

export default function PostCard({
  //   id,
  author,
  content,
  stats,
}: PostCardProps) {
  return (
    <div className="bg-card rounded-xl shadow p-4 space-y-4">
      {/* Header */}
      <PostHeader author={author} />

      {/* Content */}
      <PostContent text={content.text} mediaUrl={content.mediaUrl} />

      {/* Engagement (like + comment count) */}
      <PostEngagement likes={stats.likes} comments={stats.comments} />

      {/* Actions */}
      <PostActions />

      {/* Comments */}
      <PostComments />
    </div>
  );
}
