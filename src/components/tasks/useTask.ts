import { useState } from "react";
import useAuth from "../../context/useAuth";
import { Task, TaskPriority } from "../../context/AuthContext.types";

const useTasks = (tasks: Task[]) => {
  const { handleDeleteTask, handleEditTask } = useAuth();
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskIdEdit, setTaskIdToEdit] = useState<string | undefined>(undefined);
  const [taskIdToDelete, setTaskIdToDelete] = useState<string | undefined>(
    undefined
  );

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    priority: TaskPriority.Low,
  });

  const [initialFormData, setInitialFormData] = useState(formData);

  const openEditTaskModal = (taskId: string) => {
    setTaskIdToEdit(taskId);
    setIsModalOpenEdit(true);

    const selectedTask = tasks.find((task) => task.id === taskId);
    if (selectedTask) {
      const taskData = {
        id: selectedTask.id,
        title: selectedTask.title,
        description: selectedTask.description,
        priority: selectedTask.priority,
      };
      setFormData(taskData);
      setInitialFormData(taskData);
    }
  };

  const closeEditModal = () => {
    setIsModalOpenEdit(false);
    setTaskIdToEdit(undefined);
  };

  const handleUpdateTask = () => {
    handleEditTask(formData.id, formData);
    closeEditModal();
  };

  const openDeleteTaskModal = (taskId: string) => {
    setTaskIdToDelete(taskId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskIdToDelete(undefined);
  };

  const isFormDataChanged =
    JSON.stringify(formData) !== JSON.stringify(initialFormData);

  return {
    handleDeleteTask,
    handleEditTask,
    isModalOpen,
    isModalOpenEdit,
    taskIdToDelete,
    taskIdEdit,
    formData,
    initialFormData,
    openEditTaskModal,
    closeEditModal,
    handleUpdateTask,
    setFormData,
    openDeleteTaskModal,
    closeModal,
    isFormDataChanged,
  };
};

export default useTasks;
