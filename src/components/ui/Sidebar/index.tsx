import { Logo } from "components/common";
import SidebarUserProfile from "./SidebarUserProfile";
import SidebarLinks from "./SidebarLinks";

export const Sidebar = () => {
  return (
    <div className="flex-column gap-12 bg-dark-2 px-6 py-8 h-full w-full md:w-64 lg:w-72">
      <Logo />
      <SidebarUserProfile />
      <SidebarLinks />
    </div>
  );
};