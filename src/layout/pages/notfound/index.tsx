import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../common/button";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-colorNeutral flex-col gap-10">
      <h1 className="text-4xl font-bold text-secondaryLightGray max-md:text-xl">
        404 - Page Not Found 😒
      </h1>

      <Button
        label="Back"
        onClick={handleBack}
        className="bg-primaryBlue text-white hover:bg-blue-600 font-bold md:text-2xl max-md:text-lg py-2 px-24 rounded-xl"
      />
    </div>
  );
};

export default NotFoundPage;
