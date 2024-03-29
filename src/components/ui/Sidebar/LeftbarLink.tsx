import { Link, useLocation } from "react-router-dom";

export interface ISideBarLinkProps {
  to: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const LeftbarLink = ({ to, text, Icon }: ISideBarLinkProps) => {
  const { pathname } = useLocation();
  const isActive = to === pathname;
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
