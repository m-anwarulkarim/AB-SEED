// src/components/Feed/CreatePost/modals/LiveStreamModal.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type LiveStreamModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function LiveStreamModal({
  open,
  onClose,
}: LiveStreamModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Go Live 📹</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm">Prepare to start your live stream.</p>
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            Start Live Stream
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
