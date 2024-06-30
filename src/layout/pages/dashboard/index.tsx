import Button from "../../../common/button";
import LoadingSpinner from "../../../common/loadingSpiner";
import TaskList from "../../../common/tasks/TaskList";
import PaginationComponent from "../../../components/pagination/Pagination";
import FilterTask from "../../../components/filterTask/FilterTask";
import useDashboard from "./useDashboard";
import Modal from "../../../common/modal/Modal";
import { TaskPriority } from "../../../context/AuthContext.types";
import { images } from "../../assets";

const Dashboard: React.FC = () => {
  const {
    handleLogout,
    // user,
    tasks,
    loading,
    handlePageChange,
    handleCreateTask,
    isModalOpen,
    openCreateTaskModal,
    closeModal,
    filterTasksByPriority,
    filteredTasks,
    pageCount,
  } = useDashboard();

  // console.log("tasks-Dashboard: ", tasks);
  // console.log("user-Dashboard: ", user);
  console.log("filteredTasks: ", filteredTasks);

  return (
    <>
      <div className="py-4 border-b border-primaryBlue bg-white px-14 flex justify-between items-center">
        <h2 className="text-base text-colorDark font-bold">Dashboard</h2>
        {tasks.length !== 0 && (
          <Button
            onClick={openCreateTaskModal}
            label="Create task"
            className="bg-primaryBlue text-white hover:bg-lime-900 font-bold text-sm py-[10px] px-[24px] rounded-xl"
          />
        )}
        <Button
          onClick={handleLogout}
          iconSrc={images.logoutIcon}
          iconAlt="My icon"
          className="bg-[#FC57571A] p-2 rounded-[32px]"
        />
      </div>

      {tasks.length !== 0 && (
        <div className="flex flex-row justify-between w-full px-14 py-4 bg-primaryBg items-center max-md:flex-col max-md:gap-4">
          <h4 className="text-base text-colorDark font-bold">Tasks</h4>
          <FilterTask onSelectPriority={filterTasksByPriority} />
        </div>
      )}

      <div
        className={`flex flex-col justify-center items-center bg-primaryBg ${
          loading || filteredTasks.length === 0 ? "h-screen" : ""
        }`}
      >
        <div className="flex items-center justify-around w-full flex-col flex-1">
          {loading ? (
            <LoadingSpinner color="text-primaryBlue" h="h-8" w="w-8" />
          ) : (
            <div className="flex items-center w-full justify-center flex-col gap-6 mb-9">
              {tasks.length === 0 ? (
                <>
                  <h3 className="text-colorDark font-bold	text-3xl">
                    Nothing here yet!
                  </h3>
                  <span className="text-[#434346] text-base font-normal">
                    There are no tasks created
                  </span>
                  <Button
                    onClick={openCreateTaskModal}
                    label="Create task"
                    className="bg-primaryBlue text-white hover:bg-lime-900 font-bold text-sm py-[10px] px-[50px] rounded-xl"
                  />
                </>
              ) : (
                <TaskList
                  tasks={filteredTasks}
                  handleCreateTask={handleLogout}
                  editTask={handleLogout}
                  deleteTask={handleLogout}
                />
              )}
            </div>
          )}
          {tasks.length !== 0 && (
            <PaginationComponent
              pageCount={pageCount}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>

      {/* Modal za kreiranje zadatka */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Create New Task"
        mode="create"
        onConfirm={() => {
          // Implementirajte logiku za kreiranje zadatka
          handleCreateTask("New Task", "Description", TaskPriority.Low);
          closeModal(); // Zatvaranje moda nakon potvrde
        }}
        content={
          <div>
            {/* Ovde možete dodati formu za unos novog zadatka */}
            <input type="text" placeholder="Task Title" />
            <textarea placeholder="Task Description" />
            {/* Dodavanje prioriteta itd. */}
          </div>
        }
      />
    </>
  );
};

export default Dashboard;
