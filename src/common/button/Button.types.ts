import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  label?: React.ReactNode;
  className?: string;
  iconSrc?: string;
  iconAlt?: string;
}
