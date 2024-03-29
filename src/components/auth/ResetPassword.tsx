import { zodResolver } from "@hookform/resolvers/zod";
import { Logo } from "components/common";
import FormButton from "components/auth/forms/FormButton";
import FormInput from "components/auth/forms/FormInput";
import {
  IResetPassword,
  ResetPasswordSchema,
} from "components/auth/forms/FormTypes";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useResetPasswordMutation } from "store/apiSlice/authApiSlice";

export const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<IResetPassword>({ resolver: zodResolver(ResetPasswordSchema) });
  const [request] = useResetPasswordMutation();
  const params = useParams();

  const onSubmit = async (data: FieldValues) => {
    try {
      const result = await request({ ...data, ...params }).unwrap();
      toast.success(result.message);
    } catch (error: any) {
      toast.error(error?.data.message);
      setError("password", { message: error?.data?.errors?.password });
      setError("confirmPassword", {
        message: error?.data?.errors?.confirmPassword,
      });
    }
  };

  return (
    <div className="flex-column flex-center h-full w-9/12 max-w-md">
      <Logo />
      <p className="h3-bold mt-8 md:h2-bold sm:mt-12">Reset your password</p>
      <p className="text-light-3 small-medium mt-2 mb-6 md:base-regular">
        Enter your new password
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full grid gap-7">
        <FormInput {...register("password")} error={errors.password?.message} />
        <FormInput
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <FormButton text="Submit" disabled={isSubmitting} />
      </form>
      <p className="flex gap-1 mt-4">
        Remembered your password?
        <Link className="text-primary-500 hover:underline" to={"/login"}>
          Login
        </Link>
      </p>
    </div>
  );
};
