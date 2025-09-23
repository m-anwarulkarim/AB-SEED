import Feed from "./Layout/Feed/FeedMain";
import SidebarLeft from "./Layout/LeftSideBar/LeftSideBarMain";
import SidebarRight from "./Layout/RightSideBer/RightSideBarMain";

type MainLayoutProps = {
  children?: React.ReactNode; // future extension
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="grid grid-cols-12 gap-4 w-full max-w-[1400px] mx-auto mt-4">
      {/* Left Sidebar - only on large screens */}
      <aside className="hidden lg:block lg:col-span-3 sticky top-0 h-screen overflow-y-auto">
        <SidebarLeft />
      </aside>

      {/* Middle Feed */}
      <main className="col-span-12 md:col-span-9 lg:col-span-6">
        <Feed />
        {children}
      </main>

      {/* Right Sidebar */}
      <aside className="hidden md:block lg:col-span-3 ">
        <SidebarRight />
      </aside>
    </div>
  );
}
