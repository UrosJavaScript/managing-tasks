import React from "react";
import AuthForm from "../../../common/authForm";
import { FormData } from "../../../common/authForm/AuthForm.types";
import { images } from "../../assets";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";

const LoginPage: React.FC = () => {
  const { login, error, isLoading } = useLogin();

  const handleSubmit = (data: FormData) => {
    login(data.email, data.password);
  };

  return (
    <div className="flex items-center h-screen bg-primaryBg flex-col justify-evenly">
      <img src={images.logo} alt="loginIcon" />
      <div className="flex justify-center items-center bg-white border border-secondaryLightGray rounded-[20px]">
        <AuthForm
          title="Log in"
          onSubmit={handleSubmit}
          subtitle="Use your email to log in to your TimeTrove Dashboard."
          isLoading={isLoading}
          error={error}
        />
      </div>

      <p>
        <span className="text-colorDark text-sm font-normal">
          Don’t have an account yet?
        </span>
        &nbsp;
        <Link to="/register" className="text-primaryBlue hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
