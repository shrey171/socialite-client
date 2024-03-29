import { zodResolver } from "@hookform/resolvers/zod";
import { Logo } from "components/common";
import FormButton from "components/auth/forms/FormButton";
import FormInput from "components/auth/forms/FormInput";
import { IVerify, VerifyUserSchema } from "components/auth/forms/FormTypes";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useVerifyUserMutation } from "store/apiSlice/authApiSlice";
import { selectUser, setCredentials } from "store/slices";
import { SendOtp } from ".";

export const VerifyUser = () => {
  const {
    register,
    setError,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IVerify>({ resolver: zodResolver(VerifyUserSchema) });

  const [mutation] = useVerifyUserMutation();

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await mutation(data).unwrap();
      dispatch(setCredentials(response.data));
      toast.success("Account Verified!");
      navigate("/", { replace: true });
    } catch (e: any) {
      const errors = e?.data?.errors;
      setError("otp", { message: errors?.otp });
      setError("email", { message: errors?.email });
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    } else {
      setValue("email", user.email);
    }
  }, [user]);

  return (
    <div className="flex-column flex-center h-full w-9/12 max-w-md">
      <Logo />
      <p className="h3-bold mt-8 md:h2-bold sm:mt-12">Verify your account</p>
      <p className="text-light-3 small-medium mt-2 mb-6 md:base-regular">
        Enter the OTP you received on your email to verify
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full grid gap-7">
        <FormInput
          {...register("email")}
          disabled
          defaultValue={user?.email}
          error={errors.email?.message}
        />
        <FormInput
          {...register("otp", {
            valueAsNumber: true,
            maxLength: 6,
          })}
          type="number"
          onChange={e => (e.target.value = e.target.value.substring(0, 6))}
          inputMode="numeric"
          error={errors.otp?.message}
        />
        <SendOtp text='Resend OTP' />
        <FormButton type="submit" text="Submit" disabled={isSubmitting} />
      </form>
    </div>
  );
};
