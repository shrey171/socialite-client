import { zodResolver } from "@hookform/resolvers/zod";
import { Logo } from "components/common";
import FormButton from "components/auth/forms/FormButton";
import FormInput from "components/auth/forms/FormInput";
import { EmailSchema, IEmail } from "components/auth/forms/FormTypes";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useForgotPasswordMutation } from "store/apiSlice/authApiSlice";

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<IEmail>({ resolver: zodResolver(EmailSchema) });
  const [request] = useForgotPasswordMutation();

  const onSubmit = async (data: FieldValues) => {
    try {
      const result = await request(data).unwrap();
      toast.success(result.message);
    } catch (error: any) {
      toast.error(error?.error)
      setError("email", { message: error?.data?.errors?.email });
    }
  };

  return (
    <div className="flex-column flex-center h-full w-9/12 max-w-md">
      <Logo />
      <p className="h3-bold mt-8 md:h2-bold sm:mt-12">Get password verification link</p>
      <p className="text-light-3 small-medium mt-2 mb-6 md:base-regular">
        Enter your registered email address
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full grid gap-7">
        <FormInput {...register("email")} error={errors.email?.message} />
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
