import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { FieldValues, useForm } from "react-hook-form";
import { IRegisterData, RegisterSchema } from "./FormTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "store/apiSlice/authApiSlice";
import { useAppDispatch } from "hooks";
import { setCredentials } from "store/slices";

const RegisterForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm<IRegisterData>({ resolver: zodResolver(RegisterSchema) });

  const [mutation] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await mutation(data).unwrap();
      console.log('onSubmit ~ response', response)
      dispatch(setCredentials({ user: response.data }));
      toast.success("Please verify your email with link sent to you");
      navigate("/verify");
    } catch (e: any) {
      const errors = e?.data?.errors;
      setError("username", { message: errors?.username });
      setError("password", { message: errors?.password });
      setError("email", { message: errors?.email });
      setError("alias", { message: errors?.alias });
      return errors;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid gap-7">
      <FormInput {...register("username")} error={errors.username?.message} />
      <FormInput {...register("alias")} error={errors.alias?.message} />
      <FormInput {...register("email")} error={errors.email?.message} />
      <FormInput
        {...register("password")}
        type="password"
        error={errors.password?.message}
      />
      <FormButton text="register" disabled={isSubmitting} />
    </form>
  );
};
export default RegisterForm;
