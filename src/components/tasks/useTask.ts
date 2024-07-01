import { useState } from "react";
import useAuth from "../../context/useAuth";

const useTasks = () => {
  const { handleDeleteTask } = useAuth();
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskIdEdit, setTaskIdToEdit] = useState<string | undefined>(undefined);
  const [taskIdToDelete, setTaskIdToDelete] = useState<string | undefined>(
    undefined
  );

  // Function to open the delete task modal and set taskIdToDelete
  const openEditTaskModal = (taskId: string) => {
    setTaskIdToDelete(taskId);
    setIsModalOpenEdit(true);
  };

  // Function to close the modal and clear taskIdToDelete
  const closeEditModal = () => {
    setIsModalOpenEdit(false);
    setTaskIdToEdit(undefined);
  };

  const openDeleteTaskModal = (taskId: string) => {
    setTaskIdToDelete(taskId);
    setIsModalOpen(true);
  };

  // Function to close the modal and clear taskIdToDelete
  const closeModal = () => {
    setIsModalOpen(false);
    setTaskIdToDelete(undefined);
  };

  return {
    handleDeleteTask,
    isModalOpen,
    openDeleteTaskModal,
    closeModal,
    taskIdToDelete,
    openEditTaskModal,
    closeEditModal,
    taskIdEdit,
    isModalOpenEdit,
  };
};

export default useTasks;
