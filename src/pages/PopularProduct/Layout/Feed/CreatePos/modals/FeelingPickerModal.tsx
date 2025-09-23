// src/components/Feed/CreatePost/modals/FeelingPickerModal.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type FeelingPickerModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function FeelingPickerModal({
  open,
  onClose,
}: FeelingPickerModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How are you feeling? 🙂</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-3">
          <button className="p-2 text-lg hover:bg-accent rounded">😊</button>
          <button className="p-2 text-lg hover:bg-accent rounded">😢</button>
          <button className="p-2 text-lg hover:bg-accent rounded">😡</button>
          <button className="p-2 text-lg hover:bg-accent rounded">🥳</button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
