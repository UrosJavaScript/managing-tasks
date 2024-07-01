import { Task, TaskPriority } from "../../context/AuthContext.types";

export interface TaskListProps {
  tasks: Task[];
}

export interface CreateTaskProps {
  onSubmit: (
    title: string,
    description: string,
    priority: TaskPriority
  ) => void;
  formData: {
    done?: string | boolean;
    title: string;
    description: string;
    priority: TaskPriority;
  };
  onFormChange: (name: string, value: string | TaskPriority) => void;
  isLoading?: boolean;
}
