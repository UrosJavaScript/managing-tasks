import React from "react";
import Button from "../button";
import { AuthFormProps } from "./AuthForm.types";
import useAuthForm from "./useAuthForm";
import { images } from "../../layout/assets";
import FormInput from "../formInput";
import MessageComponent from "../messages";
import LoadingSpinner from "../loadingSpiner";

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  onSubmit,
  subtitle,
  error,
  isLoading,
}) => {
  const {
    formData,
    focus,
    errors,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
  } = useAuthForm(onSubmit);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-9 p-[40px] w-full"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <div>
          <img src={images.loginIcon} alt="loginIcon" />
        </div>
        <h2 className="text-2xl font-bold max-md:text-xl">{title}</h2>
        <p className="text-sm font-normal max-md:text-xs text-colorNeutral">
          {subtitle}
        </p>
      </div>
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onFocus={() => handleFocus("email")}
        onBlur={handleBlur}
        className={`py-[16px] px-5 text-colorDark border rounded-xl w-full focus:outline-none ${
          errors.email
            ? "border-colorRed"
            : focus === "email" || formData.email
            ? "border-primaryBlue"
            : "border-secondaryLightGray"
        }`}
        error={errors.email}
        labelColor="text-primaryBlue"
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        onFocus={() => handleFocus("password")}
        onBlur={handleBlur}
        className={`py-[16px] px-5 text-colorDark border rounded-xl w-full focus:outline-none ${
          errors.password
            ? "border-colorRed"
            : focus === "password" || formData.password
            ? "border-primaryBlue"
            : "border-secondaryLightGray"
        }`}
        error={errors.password}
        labelColor="text-primaryBlue"

      />
      {error && <MessageComponent message={error} />}
      <Button
        type="submit"
        label={isLoading ? <LoadingSpinner /> : title}
        className="bg-primaryBlue text-white hover:bg-blue-600 w-full py-[16px] rounded-xl ease-in-out duration-300 focus:outline-none flex items-center justify-center"
      />
    </form>
  );
};

export default AuthForm;
