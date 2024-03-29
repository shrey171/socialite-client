import { useAppSelector } from "hooks";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useResendOtpMutation } from "store/apiSlice/authApiSlice";
import { selectUser } from "store/slices";

interface IProps {
  text: string;
}

export const SendOtp = ({ text }: IProps) => {
  const [resendMutation, { isSuccess }] = useResendOtpMutation();
  const user = useAppSelector(selectUser);

  const resend = async () => {
    try {
      await resendMutation({ email: user?.email }).unwrap();
    } catch (e: any) {
      toast.error(e?.data?.message);
    }
  };

  useEffect(() => {
    if (isSuccess) toast.success("OTP Sent");
  }, [isSuccess]);

  return (
    <button
      type="button"
      className="hover:underline cursor-pointer bg-transparent"
      onClick={resend}>
      {text}
    </button>
  );
};
