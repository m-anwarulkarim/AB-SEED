// src/components/Feed/CreatePost/modals/PhotoUploadModal.tsx

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PhotoUploadModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function PhotoUploadModal({
  open,
  onClose,
}: PhotoUploadModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Photo/Video 🖼️</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            className="w-full"
          />
          <p className="text-sm text-muted-foreground">
            You can upload multiple images or videos.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
