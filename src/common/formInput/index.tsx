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
  labelColor,
}) => {
  const inputClasses = `py-[16px] px-5 text-colorDark border rounded-xl ${
    type !== "radio" && "w-full"
  } focus:outline-none ${error ? "border-colorRed" : className || ""} ${
    type === "radio"
      ? "h-6 w-6 peer-checked:border-secondaryLightGray cursor-pointer"
      : ""
  }`;

  const labelClasses = `${
    absolute?.left || absolute?.top
      ? `absolute left-${absolute.left} -top-${absolute.top}`
      : "relative"
  } ${
    error ? "text-colorRed" : value ? labelColor : "hidden"
  } ${labelClassBg} `;

  return (
    <div
      className={`relative ${type !== "radio" && "w-full"} ${
        containerClassName || ""
      }`}
    >
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
