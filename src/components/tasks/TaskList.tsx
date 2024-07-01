import { images } from "../../layout/assets";
import Button from "../../common/button";
import Modal from "../../common/modal/Modal";
import { TaskListProps } from "./Tasks.types";
import useTasks from "./useTask";
import EditTask from "./EditTask";
import { useState } from "react";
import { TaskPriority } from "../../context/AuthContext.types";

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const {
    handleDeleteTask,
    isModalOpen,
    openDeleteTaskModal,
    closeModal,
    taskIdToDelete,
    openEditTaskModal,
    closeEditModal,
    isModalOpenEdit,
  } = useTasks();

  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const openEditModal = (taskId: string) => {
    setSelectedTaskId(taskId);
    openEditTaskModal(taskId);
  };

  if (tasks.length === 0) {
    return (
      <div className="bg-primaryBg w-full flex flex-col justify-center items-center">
        <div className="flex items-center w-full justify-center flex-col gap-6">
          <h2 className="text-[#292929] font-medium text-base">
            There are no tasks for the selected priority!
          </h2>
        </div>
      </div>
    );
  }

 

  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-full px-14 max-md:grid-cols-1 max-md:mt-10">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-5 border border-secondaryLightGray rounded-2xl"
          >
            <div className="gap-[10px] flex flex-col ">
              <div className="flex justify-between w-full">
                <h4 className="text-colorDark font-bold text-base	">
                  {task.title}
                </h4>

                {task.done ? (
                  <span className="text-[#FF9142] px-2 py-1 bg-[#ff91561a] rounded-lg font-semibold	text-xs">
                    {task?.done === true && "In progress"}
                  </span>
                ) : (
                  <span className="text-[#2FC850] px-2 py-1 bg-[#2fc8501a] rounded-lg font-semibold	text-xs">
                    {task?.done === false && "Done"}
                  </span>
                )}
              </div>
              <span className="min-h-8 text-[#434346] text-sm font-normal">
                {task.description}
              </span>
              <div className="flex justify-between items-center">
                <span className="flex gap-1 items-center">
                  <span className="text-colorDark font-bold text-sm">
                    Priority
                  </span>
                  <span className="text-colorRed px-2 py-1 bg-primaryBg rounded-lg font-semibold	text-xs">
                    {task.priority}
                  </span>
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => {
                      openEditModal(task.id);
                      console.log("Clicked Edit for task ID:", task.id);
                    }}
                    iconSrc={images.editIcon}
                    iconAlt="edit icon"
                    className="bg-secondaryLightGray rounded-lg	p-[6px]"
                  />

                  <Button
                    onClick={() => openDeleteTaskModal(task.id)}
                    iconSrc={images.deleteIcon}
                    iconAlt="delete icon"
                    className="bg-primaryBg rounded-lg p-[6px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Work in progress edit */}
      <Modal
        isOpen={isModalOpenEdit}
        onClose={closeEditModal}
        title="Edit Task"
        mode="edit"
        onConfirm={() => {
          console.log("Edit Task confirmed");
        }}
        content={
          <EditTask
            formData={
              selectedTaskId
                ? tasks.find((task) => task.id === selectedTaskId) ?? {
                    title: "",
                    description: "",
                    priority: TaskPriority.Low,
                  }
                : {
                    title: "",
                    description: "",
                    priority: TaskPriority.Low,
                  }
            }
            onFormChange={(name, value) => {
              console.log("Form changed:", name, value);
            }}
            onSubmit={(title, description) => {
              console.log("Form submitted with:", title, description);
            }}
          />
        }
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Delete Task"
        mode="delete"
        onConfirm={() => {
          if (taskIdToDelete) {
            handleDeleteTask(taskIdToDelete);
            closeModal();
          } else {
            console.log("Cannot delete task: Task ID is undefined.");
          }
        }}
      />
    </>
  );
};

export default TaskList;
