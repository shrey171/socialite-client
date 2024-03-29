import { Outlet } from "react-router-dom";

const _Layout = () => {
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
