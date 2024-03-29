import { useAppSelector } from "hooks";
import { useResendOtpMutation } from "store/apiSlice/authApiSlice";
import { selectUser } from "store/slices";
import FormButton from "./forms/FormButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const PleaseVerify = () => {
  const [resendMutation, { isLoading }] = useResendOtpMutation();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      await resendMutation({ email: user?.email }).unwrap();
      toast.success('OTP Sent')
      navigate("/verify", { replace: true });
    } catch (e: any) {
      toast.error(e?.data?.message)
    }
  };

  return (
    <div className="w-full h-screen flex-center flex-col">
      <h1 className="h3-bold mt-8 md:h2-bold sm:mt-12">
        Looks like you are not verified!!
      </h1>
      <p className="text-light-3 small-medium mt-2 mb-6 md:base-regular">
        You need to verify your email to use Socialite.
      </p>
      <FormButton
        text="Verify Email"
        disabled={isLoading}
        onClick={onClick}
        extraClasses="min-w-60"
      />
    </div>
  );
};
