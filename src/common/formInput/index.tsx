import React from "react";
import MessageComponent from "../messages";
import { ExtendedFormInputProps } from "./FormInput.types";

const FormInput: React.FC<ExtendedFormInputProps> = ({
  label,
  type,
  name,
  value,
  checked,
  onFocus,
  onChange,
  onBlur,
  className,
  error,
  absolute,
  containerClassName,
  labelClassBg,
  id,
}) => {
  const inputClasses = `py-[16px] px-5 text-colorDark border rounded-xl w-full focus:outline-none ${
    error ? "border-colorRed" : className || ""
  } ${
    type === "radio"
      ? "h-[23px] w-[23px] peer-checked:border-secondaryLightGray cursor-pointer"
      : ""
  }`;

  const labelClasses = `${
    absolute?.left || absolute?.top
      ? `absolute left-${absolute.left} -top-${absolute.top}`
      : "relative"
  } ${
    error ? "text-colorRed" : value ? "text-primaryBlue" : "hidden"
  } ${labelClassBg}`;

  return (
    <div className={`relative w-full ${containerClassName || ""}`}>
      <label className={labelClasses}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={label}
        className={inputClasses}
      />
      {error && <MessageComponent message={error} />}
    </div>
  );
};

export default FormInput;
