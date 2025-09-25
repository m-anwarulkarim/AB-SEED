import { FaCommentDots } from "react-icons/fa";

export default function SearchHelp() {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      {/* 🖥️ : Full button */}
      <button className="hidden sm:flex items-center gap-1 rounded-full border px-3 py-1 text-sm hover:bg-gray-100 transition">
        <FaCommentDots className="h-5 w-5 text-gray-600" />
        <span>সাহায্য...</span>
      </button>

      {/* 📱 : Tooltip-style icon-only button */}
      <div className="relative group sm:hidden">
        <button
          className="flex items-center justify-center rounded-full border p-2 hover:bg-gray-100 transition"
          aria-label="সাহায্য"
        >
          <FaCommentDots className="h-5 w-5 text-gray-600" />
        </button>

        {/* Tooltip label */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-xs bg-white border rounded shadow opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          সাহায্য...
        </span>
      </div>
    </div>
  );
}
