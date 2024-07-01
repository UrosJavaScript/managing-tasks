import { useState, useEffect } from "react";
import useAuth from "../../../context/useAuth";
import { TaskPriority } from "../../../context/AuthContext.types";

const useDashboard = () => {
  const { handleLogout, handleCreateTask, tasks, user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: TaskPriority.Low,
  });
  const tasksPerPage = 6;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, [selectedPriority, currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedPriority]);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const openCreateTaskModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  const handleFormChange = (name: string, value: string | TaskPriority) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

 
  const handleSubmit = () => {
    handleCreateTask(formData.title, formData.description, formData.priority);
    closeModal();
  };

  const clearForm = () => {
    setFormData({
      title: "",
      description: "",
      priority: TaskPriority.Low,
    });
  };

  // Filtering tasks by priority
  const filterTasksByPriority = (priority: string) => {
    setSelectedPriority(priority === selectedPriority ? null : priority);
  };

  // Applying pagination to filtered tasks
  const paginatedFilteredTasks = selectedPriority
    ? tasks
        .filter((task) => task.priority === selectedPriority)
        .slice(currentPage * tasksPerPage, (currentPage + 1) * tasksPerPage)
    : tasks.slice(currentPage * tasksPerPage, (currentPage + 1) * tasksPerPage);

  // Calculate pageCount based on filtered tasks
  const pageCount = Math.ceil(
    (selectedPriority
      ? tasks.filter((task) => task.priority === selectedPriority).length
      : tasks.length) / tasksPerPage
  );

  return {
    user,
    handleLogout,
    tasks,
    loading,
    currentPage,
    currentTasks: paginatedFilteredTasks,
    handlePageChange,
    handleCreateTask,
    isModalOpen,
    openCreateTaskModal,
    closeModal,
    filterTasksByPriority,
    filteredTasks: paginatedFilteredTasks,
    pageCount,
    formData,
    handleFormChange,
    handleSubmit,
    clearForm,
  };
};

export default useDashboard;
