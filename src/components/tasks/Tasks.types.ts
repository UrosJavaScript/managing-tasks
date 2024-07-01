import { Task, TaskPriority } from "../../context/AuthContext.types";

export interface TaskListProps {
  tasks: Task[];
}

export interface CreateTaskProps {
  onSubmit?: (
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

export interface StatusTaskProps {
  selectedStatus: boolean | undefined;
  onStatusChange: (status: boolean) => void;
}

export interface EditTaskProps {
  formData: {
    id: string;
    title: string;
    description: string;
    priority: TaskPriority;
    done?: boolean;
  };
  onFormChange: <T>(name: string, value: T) => void;
}
