// src/components/Feed/Posts/PostEngagement.tsx
type PostEngagementProps = {
  likes: number;
  comments: number;
};

export default function PostEngagement({
  likes,
  comments,
}: PostEngagementProps) {
  return (
    <div className="flex justify-between text-sm text-muted-foreground">
      <p>{likes} Likes</p>
      <p>{comments} Comments</p>
    </div>
  );
}
