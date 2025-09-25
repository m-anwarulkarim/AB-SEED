import { Input } from "@/components/ui/input";
import HelpButton from "./HelpButton"; // নতুন component import

export default function SearchHelp() {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      <div className="flex items-center gap-2 rounded-full border px-2 py-1">
        <Input
          placeholder="খুঁজুন..."
          className="border-0 focus:ring-0 w-20 sm:w-28 md:w-36 lg:w-44 xl:w-56"
        />
      </div>

      {/* আগের Button এর জায়গায় নতুন HelpButton */}
      <HelpButton />
    </div>
  );
}
