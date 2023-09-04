"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  disabled,
  errors,
  register,
}) => {
  return (
    <div>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <div className=' mt-2'>
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `
            form-input
            block
            w-full
            shadow-sm
            rounded-md
            border-0
            py-1.5
            text-gray-900
            ring-1
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-inset
            focus:ring-sky-600
            sm:text-sm
            sm:leading-5
            `,
            errors[id] &&
              "border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:ring-red-500",
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
};
