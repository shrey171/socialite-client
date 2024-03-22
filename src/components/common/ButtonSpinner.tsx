type TProps = {
  loading: boolean;
};

export const ButtonSpinner = ({ loading }: TProps) =>
  loading && (
    <div className="h-6 w-6 rounded-full border-4 border-slate-200 border-b-transparent animate-spin" />
  );
