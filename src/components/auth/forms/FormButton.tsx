import { ButtonSpinner } from "components/common";

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  extraClasses?: string;
  disabled: boolean;
}

const FormButton = ({ text, disabled, extraClasses = '', ...props }: IProps) => {
  const content = disabled ? <ButtonSpinner loading={disabled} /> : text;
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`flex-center border-none capitalize rounded px-12 py-3 bg-primary-500 active:bg-primary-600 text-white 
      disabled:pointer-events-none disabled:bg-gray-800 ${extraClasses}`}
      {...props}>
      {content}
    </button>
  );
};
export default FormButton;
