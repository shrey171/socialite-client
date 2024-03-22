import { ButtonSpinner } from "components/common";

export interface InputProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled: boolean;
}

const FormButton = ({ text, disabled, ...props }: InputProps) => {
  const content = disabled ? <ButtonSpinner loading={disabled} /> : text;
  return (
    <button
      type="submit"
      disabled={disabled}
      className="flex-center border-none capitalize rounded py-3 bg-primary-500 active:bg-primary-600 text-white 
      disabled:pointer-events-none disabled:bg-gray-800"
      {...props}>
      {content}
    </button>
  );
};
export default FormButton;
