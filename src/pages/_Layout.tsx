import { AuthWrapper, Sidebar } from "components/ui";
import { Outlet } from "react-router-dom";

const _Layout = () => {
  return (
    <AuthWrapper>
      <div className="flex bg-dark-1 h-screen w-screen">
        <Sidebar />
        <Outlet />
      </div>
    </AuthWrapper>
  );
};
export default _Layout;
