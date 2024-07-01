import React from "react";
import FormInput from "../../common/formInput";
import FilterTask from "./FilterTask";
import StatusTask from "./StatusTask";
import { EditTaskProps } from "./Tasks.types";

const EditTask: React.FC<EditTaskProps> = ({ formData, onFormChange }) => {
  const { title, description, priority, done } = formData;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onFormChange(name, value);
  };

  const handleStatusChange = (status: boolean) => {
    onFormChange("done", status);
  };

  return (
    <form>
      <h3 className="pt-6 text-colorDark text-base font-bold">Status</h3>
      <StatusTask selectedStatus={done} onStatusChange={handleStatusChange} />

      <div className="my-6">
        <FormInput
          label="Task title"
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-[#292929] focus:outline-none" // Add your custom styles here
        />
      </div>
      <div className="mb-6">
        <FormInput
          label="Description"
          type="textarea"
          name="description"
          value={description}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-[#292929] focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <span className="block text-colorDark font-bold text-base mb-2">
          Priority
        </span>
        <FilterTask
          selectedPriority={priority}
          onSelectPriority={(value) => onFormChange("priority", value)}
        />
      </div>
    </form>
  );
};

export default EditTask;
