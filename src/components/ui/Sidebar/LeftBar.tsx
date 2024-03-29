import { Logo } from "components/common";
import LeftbarLinks from "./LeftbarLinks";
import LeftbarUserProfile from "./SidebarUserProfile";

export const LeftBar = () => {
  return (
    <div className="flex-col gap-12 bg-dark-2 px-6 py-8 h-full min-w-64 w-[18%] hidden md:flex">
      <Logo />
      <LeftbarUserProfile />
      <LeftbarLinks />
    </div>
  );
};