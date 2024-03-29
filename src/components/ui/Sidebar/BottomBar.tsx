import { Link } from "react-router-dom";
import { links } from "./LeftbarLinks";

export const BottomBar = () => {
  return (
    <div className="flex md:hidden">
      {links.map(({ to, text, Icon }) => (
        <div>
          <Icon />
          <Link to={to}>{text}</Link>
        </div>
      ))}
    </div>
  );
};
