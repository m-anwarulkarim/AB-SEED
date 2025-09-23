// src/components/Feed/Posts/PostContent.tsx
type PostContentProps = {
  text: string;
  mediaUrl?: string;
};

export default function PostContent({ text, mediaUrl }: PostContentProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm">{text}</p>
      {mediaUrl && (
        <div className="rounded-xl overflow-hidden">
          <img
            src={mediaUrl}
            alt="Post media"
            className="w-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
