import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-green-600 flex-shrink-0"
    >
      <div className="flex items-center gap-1 border border-green-600 rounded-full p-2">
        <img
          src="/images/logo.png"
          alt="logo"
          className="h-6 w-6 sm:h-5 sm:w-5 xl:h-8 xl:w-8"
        />
      </div>
      <span className="text-base sm:text-xl md:text-2xl xl:text-3xl font-bold whitespace-nowrap">
        Ab Seed Company
      </span>
    </Link>
  );
}
