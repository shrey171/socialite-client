import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ILoginData, LoginSchema } from "./FormTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "hooks";

const LoginForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginData>({ resolver: zodResolver(LoginSchema) });

  const auth = useAuth({ type: "login", setError });

  return (
    <form onSubmit={handleSubmit(auth)} className="w-full grid">
      <div className="grid gap-7 mb-2">
        <FormInput {...register("username")} error={errors.username?.message} />
        <FormInput {...register("password")} error={errors.password?.message} />
      </div>
      <Link to="/forgot-password" className="text-primary-500 w-full mb-6 hover:underline">
        forgot password?
      </Link>
      <FormButton text="login" disabled={isSubmitting} />
    </form>
  );
};
export default LoginForm;
