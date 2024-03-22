import SidebarLink from "./SidebarLink";
import { IconCreatePost, IconExplore, IconHome, IconPeople, IconSaved } from "assets/icons";

const SidebarLinks = () => {
  return (
    <div className="grid gap-6">
      <SidebarLink to="/" text="home" Icon={IconHome} />
      <SidebarLink to="/explore" text="explore" Icon={IconExplore} />
      <SidebarLink to="/people" text="people" Icon={IconPeople} />
      <SidebarLink to="/saved" text="saved" Icon={IconSaved} />
      <SidebarLink to="/create-post" text="create post" Icon={IconCreatePost} />
    </div>
  );
};
export default SidebarLinks;
