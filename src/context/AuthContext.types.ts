import { AxiosError } from "axios";

export interface AuthContextProps {
  isAuthenticated: boolean;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleRegister: (email: string, password: string) => Promise<boolean>;
  handleCreateTask: (
    title: string,
    description: string,
    priority: TaskPriority
  ) => Promise<void>;

  handleLogout: () => void;
  error: string | null;
  isLoading: boolean;
  user: User | null;
  tasks: Task[];
  handleDeleteTask: (id: string) => Promise<void>;
}
export interface AuthResponse {
  status: number;
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    username: string;
  };
}

export interface User {
  id: string;
  username: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  priority: TaskPriority;
}

export enum TaskPriority {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

export interface TasksResponse {
  items: Task[];
  totalItems: number;
  totalPages: number;
  page: number;
}

export type ApiError = AxiosError | unknown;
