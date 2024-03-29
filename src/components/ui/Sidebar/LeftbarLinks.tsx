import { ISideBarLinkProps, LeftbarLink } from "./LeftbarLink";
import {
  IconCreatePost,
  IconExplore,
  IconHome,
  IconPeople,
  IconSaved,
} from "assets/icons";

export const links: ISideBarLinkProps[] = [
  {
    to: "/",
    text: "home",
    Icon: IconHome,
  },
  {
    to: "/explore",
    text: "explore",
    Icon: IconExplore,
  },
  {
    to: "/people",
    text: "people",
    Icon: IconPeople,
  },
  {
    to: "/saved",
    text: "saved",
    Icon: IconSaved,
  },
  {
    to: "/create-post",
    text: "create post",
    Icon: IconCreatePost,
  },
];

const SidebarLinks = () => {
  return (
    <div className="grid gap-6">
      {links.map(link => (
        <LeftbarLink key={link.to} {...link} />
      ))}
    </div>
  );
};
export default SidebarLinks;
