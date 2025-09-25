// src/components/Sidebar/ProfileSection.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typography } from "@/components/ui/Typography";

type ProfileSectionProps = {
  name: string;
  avatarUrl: string;
};

export default function ProfileSection({
  name,
  avatarUrl,
}: ProfileSectionProps) {
  return (
    <div className="flex items-center gap-3 p-2 mb-4">
      <Avatar>
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <Typography variant="body">{name}</Typography>
    </div>
  );
}
