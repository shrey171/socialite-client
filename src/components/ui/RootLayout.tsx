import { Spinner } from "components/common/Spinner";
import { useSpinner } from "hooks/useSpinner";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RootLayout = () => {
  const { loading } = useSpinner();
  return loading ? (
    <Spinner />
  ) : (
    <>
      <ToastContainer
        className="capitalize"
        closeOnClick
        newestOnTop
        theme="dark"
      />
      <Outlet />
    </>
  );
};
