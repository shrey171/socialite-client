import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { useForm } from "react-hook-form";
import { IRegisterData, RegisterSchema } from "./FormTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "hooks";

const RegisterForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
  } = useForm<IRegisterData>({ resolver: zodResolver(RegisterSchema) });

  const auth = useAuth({ type: "register", setError });

  return (
    <form onSubmit={handleSubmit(auth)} className="w-full grid gap-7">
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
