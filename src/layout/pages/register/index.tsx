import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../../common/authForm";
import { FormData } from "../../../common/authForm/AuthForm.types";
import useRegister from "./useRegister";
import { images } from "../../assets";

const RegisterPage: React.FC = () => {
  const { register, error, isLoading } = useRegister();

  const handleSubmit = (data: FormData) => {
    register(data.email, data.password);
  };

  return (
    <div className="flex items-center h-screen bg-primaryBg flex-col justify-evenly">
      <img src={images.logo} alt="loginIcon" />
      <div className="flex justify-center items-center bg-white border border-secondaryLightGray rounded-[20px]">
        <AuthForm
          title="Sign up"
          onSubmit={handleSubmit}
          subtitle="Create an account for your TimeTrove Dashboard."
          isLoading={isLoading}
          error={error}
        />
      </div>

      <p>
        <span className="text-colorDark text-sm font-normal">
          Already have an account ?
        </span>
        &nbsp;
        <Link to="/" className="text-primaryBlue hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
