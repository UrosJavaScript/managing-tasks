import { createContext, useState, ReactNode, useEffect } from "react";
import axios, { AxiosError } from "axios";
import {
  AuthContextProps,
  Task,
  TaskPriority,
  User,
} from "./AuthContext.types";
import {
  apiCreateTask,
  apiGetTasks,
  apiLogin,
  apiRegister,
} from "../services/authService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setIsAuthenticated(true);

      try {
        const parsedAuth = JSON.parse(storedAuth);
        const { user } = parsedAuth;
        setUser(user);

        // Učitavanje taskova za korisnika
        fetchUserTasks();
      } catch (error) {
        console.error("Error parsing stored auth data:", error);
        // Handle error if JSON parsing fails, e.g., clear localStorage or set user to null
        setUser(null); // Set user to null in case of parsing error
      }
    }
  }, []);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiLogin(email, password);
      console.log("Response: ", response);

      // Provera strukture odgovora
      if (response && response.accessToken) {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            accessToken: response.accessToken,
            user: {
              id: response.user.id,
              username: response.user.username,
            },
          })
        );
        toast.success("Successfully login!");
        setIsAuthenticated(true);
        setUser({
          id: response.user.id,
          username: response.user.username,
        });
        fetchUserTasks();
      } else {
        // Ako odgovor nema očekivane podatke, tretirajte kao grešku
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.log("Error during login:", err); // Logovanje greške
      handleAuthError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const registrationSuccessful = await apiRegister(username, password);

      console.log("Registration successful:", registrationSuccessful);

      // Provera da li je registracija uspešna
      if (registrationSuccessful) {
        // localStorage.setItem("auth", JSON.stringify({ user: { email } }));
        toast.success("Successfully registered!");

        setTimeout(() => {
          toast.success("Log in now!");
        }, 500);

        // setIsAuthenticated(true);
        return true; // Vratite true ako je registracija uspešna
      } else {
        // Ako registracija nije uspešna, tretirajte kao grešku
        throw new Error("Registration unsuccessful");
      }
    } catch (err) {
      console.log("Error during registration:", err); // Logovanje greške
      handleAuthError(err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    toast.success("Logout 🖐");
    setTimeout(() => {
      setIsAuthenticated(false);
      setUser(null); // Resetuj korisnika na null pri odjavi
      localStorage.removeItem("auth");
    }, 2000);
  };

  const handleAuthError = (err: unknown) => {
    console.log("Error object: ", err);

    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;
      const status = axiosError.response?.status;

      if (status === 401) {
        toast.error("User not found");
      } else if (status === 400) {
        toast.error("Invalid credentials");
      } else if (status === 403) {
        toast.error("Forbidden");
      } else if (status === 404) {
        toast.error("Not found");
      } else if (status === 500) {
        toast.error("Internal server error");
      } else if (status === 503) {
        toast.error("Service unavailable");
      } else {
        toast.error("Unexpected error occurred");
      }
    } else if (err instanceof Error) {
      toast.error(`${err.message}`);
    } else {
      toast.error("An unknown error occurred");
    }
  };

  const fetchUserTasks = async () => {
    try {
      const { items: tasks } = await apiGetTasks();
      console.log("fetchUserTasks:  ", tasks);
      setTasks(tasks);
    } catch (error) {
      console.error("Error fetching user tasks:", error);
    }
  };

  const handleCreateTask = async (
    title: string,
    description: string,
    priority: TaskPriority
  ) => {
    try {
      const newTask: Omit<Task, "id" | "createdAt" | "updatedAt"> = {
        title,
        description,
        done: false,
        priority,
      };
      const createdTask = await apiCreateTask(newTask);
      setTasks((prevTasks) => [...prevTasks, createdTask]);
      toast.success("Task created successfully!");
    } catch (error) {
      console.log("Error creating task:", error);
      toast.error("Failed to create task.");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleLogin,
        handleRegister,
        handleLogout,
        handleCreateTask,
        error,
        isLoading,
        user,
        tasks,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
