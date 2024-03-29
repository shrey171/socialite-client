import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { Link, useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { ILoginData, LoginSchema } from "./FormTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "hooks";
import { useLoginMutation } from "store/apiSlice/authApiSlice";
import { setCredentials } from "store/slices";

const LoginForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginData>({ resolver: zodResolver(LoginSchema) });
  const navigate = useNavigate();

  const [mutation] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    try {
      const result = await mutation(data).unwrap();
      const user = result.data;
      dispatch(setCredentials({ user, token: user.token }));
      navigate("/", { replace: true });
    } catch (e: any) {
      const errors = e?.data?.errors;
      setError("username", { message: errors?.username });
      setError("password", { message: errors?.password });
      return errors;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid">
      <div className="grid gap-7 mb-2">
        <FormInput {...register("username")} error={errors.username?.message} />
        <FormInput {...register("password")} error={errors.password?.message} />
      </div>
      <Link
        to="/forgot-password"
        className="text-primary-500 w-full mb-6 hover:underline">
        forgot password?
      </Link>
      <FormButton text="login" disabled={isSubmitting} />
    </form>
  );
};
export default LoginForm;
