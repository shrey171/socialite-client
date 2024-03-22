import { useAppSelector } from "hooks";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { selectToken } from "store/slices";

const _Layout = () => {
  const token = useAppSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/", { replace: true });
  }, [token]);

  return (
    <main className="flex min-h-screen w-full">
      <div className="flex-center basis-full">
        <Outlet />
      </div>
      <img
        className="object-cover basis-full h-screen hidden xl:block"
        src="https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg"
        alt="auth-image"
      />
    </main>
  );
};
export default _Layout;
