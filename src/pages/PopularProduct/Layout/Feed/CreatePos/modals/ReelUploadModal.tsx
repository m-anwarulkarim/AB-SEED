import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Clapperboard } from "lucide-react";

type ReelUploadModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ReelUploadModal({
  open,
  onClose,
}: ReelUploadModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Clapperboard className="w-5 h-5" />
            Upload a Reel
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <input type="file" accept="video/*" className="w-full" />
          <p className="text-sm text-muted-foreground">
            Choose a short video (max 60s) to upload as a reel.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
