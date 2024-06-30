import { images } from "../../layout/assets";
import Button from "../button";
import { TaskListProps } from "./TaskList.types";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  handleCreateTask,
  // currentTasks,
  editTask,
  deleteTask,
}) => {
  if (tasks.length === 0) {
    return (
      <div className="h-screen bg-primaryBg w-full flex flex-col justify-center items-center">
        <div className="flex items-center w-full justify-center flex-col gap-6">
          <h2>Nothing here yet!</h2>
          <p>There are no tasks created</p>
          <Button
            onClick={handleCreateTask}
            label="Create task"
            className="bg-primaryBlue text-white hover:bg-lime-900 font-bold md:text-lg max-md:text-base py-2 px-14 rounded-xl"
          />
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
                    onClick={editTask}
                    iconSrc={images.editIcon}
                    iconAlt="edit icon"
                    className="bg-secondaryLightGray rounded-lg	p-[6px]"
                  />

                  <Button
                    onClick={deleteTask}
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
    </>
  );
};

export default TaskList;
