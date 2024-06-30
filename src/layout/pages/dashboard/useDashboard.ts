import { useState, useEffect } from "react";
import useAuth from "../../../context/useAuth";

const useDashboard = () => {
  const { handleLogout, handleCreateTask, tasks, user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const tasksPerPage = 6;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  // Set loading to true whenever selectedPriority changes
  useEffect(() => {
    setLoading(true); // Set loading to true
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust timeout as needed

    return () => clearTimeout(timeout);
  }, [selectedPriority]);

  // Reset currentPage when selectedPriority or currentPage changes
  useEffect(() => {
    setCurrentPage(0);
  }, [selectedPriority]);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  // Function to open the task creation modal
  const openCreateTaskModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
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
    pageCount, // Return pageCount to be used in PaginationComponent
  };
};

export default useDashboard;
