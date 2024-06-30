import React from "react";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  className,
  iconSrc,
  iconAlt,
  ...props
}) => {
  return (
    <button className={`${className}`} onClick={onClick} {...props}>
      {iconSrc && <img src={iconSrc} alt={iconAlt} />}
      {label}
    </button>
  );
};

export default Button;
