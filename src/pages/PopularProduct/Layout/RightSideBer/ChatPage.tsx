// src/pages/Messenger/ChatPage.tsx
import { useParams } from "react-router-dom";
import { Typography } from "@/components/ui/Typography";

export default function ChatPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex-1 p-6">
      <Typography variant="h2" className="mb-4">
        Chat with Friend #{id}
      </Typography>
      <div className="border rounded-lg p-4">
        <Typography variant="body">
          This is the chat window for friend with ID: {id}.
        </Typography>
      </div>
    </div>
  );
}
