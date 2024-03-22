import { useAppDispatch, useAppSelector } from "hooks";
import { useSpinner } from "hooks/useSpinner";
import { ReactNode, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRefreshMutation } from "store/apiSlice/authApiSlice";
import { selectToken, setCredentials } from "store/slices";

interface props {
  children: ReactNode;
}

export const AuthWrapper = ({ children }: props) => {
  const { asyncWrapper } = useSpinner();
  const token = useAppSelector(selectToken);
  const [refresh] = useRefreshMutation();
  const initialized = useRef(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const fetch = async () => {
    try {
      const { data } = await refresh({}).unwrap();
      dispatch(setCredentials(data));
    } catch {
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    !token && !initialized.current && asyncWrapper(fetch);
    initialized.current = true;
  }, []);

  return token ? children : <></>;
};
