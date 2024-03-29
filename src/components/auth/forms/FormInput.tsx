import { forwardRef } from "react";
import { IInputProps } from "./FormTypes";

const FormInput = forwardRef<HTMLInputElement, IInputProps>(
  ({ name, error, ...props }, ref) => {
    return (
      <div className="grid">
        <label
          className="capitalize mb-3 text-sm font-medium leading-none"
          htmlFor={name}>
          {name}
        </label>
        <input
          className="rounded-md p-3 text-sm bg-[#1F1F22] md:p-4
          border-none outline-none outline-2 outline-offset-0 focus-visible:outline-[#7878A3]  
          disabled:cursor-not-allowed disabled:opacity-50"
          name={name}
          id={name}
          ref={ref}
          {...props}
        />
        {error && <p className="text-red mt-1 text-sm">{error}</p>}
      </div>
    );
  }
);
export default FormInput;
