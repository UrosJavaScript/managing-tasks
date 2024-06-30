import React from "react";

export interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  checked?: boolean;
  onFocus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  error?: string;
  containerClassName?: string;
  labelClassBg?: string;
  id?: string;
}

export interface ExtendedFormInputProps extends FormInputProps {
  absolute?: {
    left?: string;
    top?: string;
  };
}
