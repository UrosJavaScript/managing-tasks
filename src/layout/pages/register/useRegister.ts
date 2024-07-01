import { useNavigate } from "react-router-dom";
import useAuth from "../../../context/useAuth";

const useRegister = () => {
  const context = useAuth();
  const navigate = useNavigate();

  if (!context) {
    throw new Error("useRegister must be used within an AuthProvider");
  }

  const { handleRegister, error, isLoading } = context;

  const executeRegister = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      await handleRegister(email, password);
      navigate("/");
      return true;
    } catch (error) {
      console.log("Error in executeRegister:", error);
      return false;
    }
  };

  return {
    register: executeRegister,
    error,
    isLoading,
  };
};

export default useRegister;
