import React from "react";
import FormInput from "../../common/formInput";
import FilterTask from "./FilterTask";
import { CreateTaskProps } from "./Tasks.types";

const CreateTask: React.FC<CreateTaskProps> = ({ formData, onFormChange }) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    onFormChange(name, value);
  };

  return (
    <form>
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

export default CreateTask;
