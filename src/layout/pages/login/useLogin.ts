import useAuth from "../../../context/useAuth";

const useLogin = () => {
  const context = useAuth();

  if (!context) {
    throw new Error("useLogin must be used within an AuthProvider");
  }

  const { handleLogin, error, isLoading } = context;

  const executeLogin = async (email: string, password: string) => {
    handleLogin(email, password);
  };

  return {
    login: executeLogin,
    error,
    isLoading,
  };
};

export default useLogin;
