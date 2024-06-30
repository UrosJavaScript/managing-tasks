import axios, { AxiosError } from "axios";
import {
  AuthResponse,
  Task,
  TaskPriority,
  TasksResponse,
} from "../context/AuthContext.types";

const API_BASE_URL = import.meta.env.VITE_AUTHENTICATE;

export const apiLogin = async (
  username: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      username,
      password,
    });
    console.log("Successful login response:", response);

    // Provera strukture odgovora
    if (response && response.data.accessToken) {
      return response.data as AuthResponse; // Vraćanje celog odgovora
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const status = axiosError.response?.status;

      if (status === 401) {
        throw new Error("User not found");
      } else if (status === 400) {
        throw new Error("Invalid credentials");
      } else if (status === 403) {
        throw new Error("Forbidden");
      } else if (status === 404) {
        throw new Error("Not found");
      } else if (status === 500) {
        throw new Error("Internal server error");
      } else if (status === 503) {
        throw new Error("Service unavailable");
      } else {
        throw new Error("Unexpected error occurred");
      }
    } else {
      throw new Error("Network error occurred");
    }
  }
};

export const apiRegister = async (
  username: string,
  password: string
): Promise<boolean> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/registration`, {
      username,
      password,
    });

    console.log("Successful registration response:", response);

    // Provera statusa odgovora
    if (response && response.status === 201) {
      return true; // Vraća se true ako je registracija uspešna
    } else {
      throw new Error("Unexpected status code: " + response.status);
    }
  } catch (error) {
    console.error("Error object in apiRegister: ", error);

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const status = axiosError.response?.status;

      if (status === 400) {
        throw new Error("User already exists");
      } else if (status === 401) {
        throw new Error("Unauthorized");
      } else if (status === 403) {
        throw new Error("Forbidden");
      } else if (status === 404) {
        throw new Error("Not found");
      } else if (status === 500) {
        throw new Error("Internal server error");
      } else if (status === 503) {
        throw new Error("Service unavailable");
      } else {
        throw new Error("Unexpected error occurred");
      }
    } else {
      throw new Error("Network error occurred");
    }
  }
};

export const apiGetTasks = async (): Promise<TasksResponse> => {
  try {
    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")!).accessToken
      : null;

    const response = await axios.get<TasksResponse>(`${API_BASE_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("apiGetTasks: ", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; // Ponovno bacite grešku kako biste mogli rukovati njome u pozivatelju funkcije
  }
};

export const apiCreateTask = async (task: {
  title: string;
  description: string;
  priority: TaskPriority;
}): Promise<Task> => {
  try {
    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")!).accessToken
      : null;

    const response = await axios.post<Task>(`${API_BASE_URL}/tasks`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error; // Ponovno bacite grešku kako biste mogli rukovati njome u pozivatelju funkcije
  }
};
