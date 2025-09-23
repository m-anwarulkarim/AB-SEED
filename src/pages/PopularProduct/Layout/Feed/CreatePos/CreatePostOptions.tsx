// src/components/Feed/CreatePost/CreatePostOptions.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImageIcon, VideoIcon, SmileIcon, RadioIcon } from "lucide-react";

import ReelUploadModal from "./modals/ReelUploadModal";
import LiveStreamModal from "./modals/LiveStreamModal";
import PhotoUploadModal from "./modals/PhotoUploadModal";
import FeelingPickerModal from "./modals/FeelingPickerModal";

export default function CreatePostOptions() {
  // Modal states
  const [photoOpen, setPhotoOpen] = useState(false);
  const [reelOpen, setReelOpen] = useState(false);
  const [liveOpen, setLiveOpen] = useState(false);
  const [feelingOpen, setFeelingOpen] = useState(false);

  return (
    <div className="flex justify-between px-4 py-2 border-t">
      {/* Photo/Video */}
      <Button
        variant="ghost"
        className="flex items-center gap-2"
        onClick={() => setPhotoOpen(true)}
      >
        <ImageIcon className="w-5 h-5 text-green-500" />
        Photo/Video
      </Button>

      {/* Reel */}
      <Button
        variant="ghost"
        className="flex items-center gap-2"
        onClick={() => setReelOpen(true)}
      >
        <VideoIcon className="w-5 h-5 text-red-500" />
        Reel
      </Button>

      {/* Live */}
      <Button
        variant="ghost"
        className="flex items-center gap-2"
        onClick={() => setLiveOpen(true)}
      >
        <RadioIcon className="w-5 h-5 text-purple-500" />
        Live
      </Button>

      {/* Feeling */}
      <Button
        variant="ghost"
        className="flex items-center gap-2"
        onClick={() => setFeelingOpen(true)}
      >
        <SmileIcon className="w-5 h-5 text-yellow-500" />
        Feeling
      </Button>

      {/* Modals */}
      <PhotoUploadModal open={photoOpen} onClose={() => setPhotoOpen(false)} />
      <ReelUploadModal open={reelOpen} onClose={() => setReelOpen(false)} />
      <LiveStreamModal open={liveOpen} onClose={() => setLiveOpen(false)} />
      <FeelingPickerModal
        open={feelingOpen}
        onClose={() => setFeelingOpen(false)}
      />
    </div>
  );
}
