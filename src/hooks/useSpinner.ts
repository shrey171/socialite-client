import { selectLoading, setSpinnerState } from "store/slices";
import { useAppDispatch, useAppSelector } from "./store"

export const useSpinner = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const setLoading = (loading: boolean) => {
    dispatch(setSpinnerState({ loading }));
  };
  const asyncWrapper = async (callback: Function) => {
    setLoading(true);
    const result = await callback()
    setLoading(false);
    return result;
  }
  return { loading, setLoading, asyncWrapper }
}