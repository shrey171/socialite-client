import { PleaseVerify } from "components/auth";
import { AuthWrapper, BottomBar, LeftBar, TopBar } from "components/ui";
import { useAppSelector } from "hooks";
import { Outlet } from "react-router-dom";
import { selectUser } from "store/slices";

const _Layout = () => {
  const user = useAppSelector(selectUser);
  const outlet = (
    <section className="w-full basis-full">
      <Outlet />
    </section>
  );
  return (
    <AuthWrapper>
      <div className="flex-column pt-4 px-3 bg-dark-1 h-screen w-screen md:flex-row md:p-0">
        <LeftBar />
        <TopBar />
        {user?.isVerified ? outlet : <PleaseVerify />}
        <BottomBar />
      </div>
    </AuthWrapper>
  );
};
export default _Layout;
