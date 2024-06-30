import { useState } from "react";
import { FormData } from "./AuthForm.types";

const useAuthForm = (onSubmit: (data: FormData) => void) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [focus, setFocus] = useState<"email" | "password" | null>(null);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validateField = (name: string, value: string) => {
    let error = "";

    if (name === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email is invalid";
      }
    } else if (name === "password") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 5) {
        error = "Password must be at least 5 characters";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors: { email?: string; password?: string } = {};

    for (const [name, value] of Object.entries(formData)) {
      validateField(name, value);
      if (!value) {
        isValid = false;
        newErrors[name as keyof typeof formData] = "This field is required";
      }
      if (errors[name as keyof typeof formData]) {
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handleFocus = (field: "email" | "password") => {
    setFocus(field);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFocus(null);
  };

  return {
    formData,
    focus,
    errors,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
  };
};

export default useAuthForm;
