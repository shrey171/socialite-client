import { Logo } from "components/common";
import LoginForm from "components/auth/forms/LoginForm";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex-column flex-center h-full w-9/12 max-w-md">
      <Logo />
      <p className="h3-bold mt-8 md:h2-bold sm:mt-12">Log in to your account</p>
      <p className="text-light-3 small-medium mt-2 mb-6 md:base-regular">
        Welcome back! please enter your details
      </p>
      <LoginForm />
      <p className="flex gap-1 mt-4">
        Don't have an account?
        <Link className="text-primary-500 hover:underline" to={"/register"}>
          Register
        </Link>
      </p>
    </div>
  );
};
