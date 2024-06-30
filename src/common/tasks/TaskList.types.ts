import { Task } from "../../context/AuthContext.types";

export interface TaskListProps {
  tasks: Task[];
  // currentTasks?: Task[];
  handleCreateTask: () => void;
  editTask: () => void;
  deleteTask: () => void;
}
