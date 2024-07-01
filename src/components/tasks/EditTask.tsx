import React from "react";
import FormInput from "../../common/formInput";
import FilterTask from "./FilterTask";
import { CreateTaskProps } from "./Tasks.types";
import StatusTask from "./StatusTask";

const EditTask: React.FC<CreateTaskProps> = ({ formData, onFormChange }) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    onFormChange(name, value);
  };

  const handleStatusChange = (status: boolean) => {
    const statusString = status ? "true" : "false";
    onFormChange("inProgress", statusString);
  };

  return (
    <form>
      <h3 className="pt-6 text-colorDark text-base font-bold">Status</h3>
      <StatusTask selectedStatus={true} onStatusChange={handleStatusChange} />

      <div className="my-6">
        <FormInput
          label="Task title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-[#292929] focus:outline-none" // Add your custom styles here
        />
      </div>
      <div className="mb-6">
        <FormInput
          label="Description"
          type="textarea"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-[#292929] focus:outline-none" // Add your custom styles here
        />
      </div>
      <div className="mb-4">
        <span className="block text-colorDark font-bold text-base mb-2">
          Priority
        </span>
        <FilterTask
          onSelectPriority={(value) => onFormChange("priority", value)}
        />
      </div>
    </form>
  );
};

export default EditTask;
