import {
  useLoginMutation,
  useRegisterMutation,
} from "store/apiSlice/authApiSlice";
import { setCredentials } from "store/slices";
import { useAppDispatch } from ".";
import { FieldValues, UseFormSetError } from "react-hook-form";
import { ILoginData, IRegisterData } from "components/auth/forms/FormTypes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface props {
  type: "login" | "register";
  setError: UseFormSetError<ILoginData | IRegisterData>;
}

export const useAuth = ({ type, setError }: props) => {
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return async (data: FieldValues) => {
    const mutation = type === "login" ? login : register;
    try {
      const result = await mutation(data).unwrap();
      const user = result.data;
      dispatch(setCredentials({ user, token: user.token }));
      if (type === 'register') {
        toast.success('Please verify your email with link sent to you')
        navigate('/verify')
      }
      return result;
    } catch (e: any) {
      const errors = e?.data?.errors;
      setError("username", { message: errors?.username });
      setError("password", { message: errors?.password });
      setError("email", { message: errors?.email });
      setError("alias", { message: errors?.alias });
      return errors;
    }
  };
};
