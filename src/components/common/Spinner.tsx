import { useAppSelector } from "hooks";
import { selectLoading } from "store/slices";

export const Spinner = () => {
  const loading = useAppSelector(selectLoading);
  return (
    loading && (
      <div className="w-screen h-screen flex-center bg-transparent">
        <div className="h-10 w-10 rounded-full border-[6px] border-slate-200 border-b-transparent animate-spin" />
      </div>
    )
  );
};
