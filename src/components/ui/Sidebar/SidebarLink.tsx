import { Link, useLocation } from "react-router-dom";
import { ISideBarLinkProps } from "./types";

const SidebarLink = ({ to, text, Icon }: ISideBarLinkProps) => {
  const path = useLocation().pathname;
  const isActive = to === path;
  let activeLinkClasses = "";
  let activeIconClasses = "";
  if (isActive) {
    activeLinkClasses = "bg-primary-500";
    activeIconClasses = "invert-white";
  }

  return (
    <Link
      to={to}
      className={`rounded-lg p-4 transition duration-300 group hover:bg-primary-500 ${activeLinkClasses}`}>
      <p className="flex gap-4">
        <Icon className={`group-hover:invert-white ${activeIconClasses}`} />
        <span className="capitalize font-medium">{text}</span>
      </p>
    </Link>
  );
};
export default SidebarLink;
