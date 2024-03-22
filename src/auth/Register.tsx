import { Logo } from "components/common";
import RegisterForm from "components/forms/RegisterForm";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="flex-column flex-center h-full w-9/12 max-w-md">
      <Logo />
      <p className="h3-bold mt-8 md:h2-bold sm:mt-12">Create a new account</p>
      <p className="text-light-3 small-medium mb-6 md:base-regular mt-2">
        To use Socialite, please enter your details
      </p>
      <RegisterForm />
      <p className="flex gap-1 mt-4">
        Already have an account?
        <Link className="text-primary-500 hover:underline" to={"/login"}>
          Log in
        </Link>
      </p>
    </div>
  );
};
