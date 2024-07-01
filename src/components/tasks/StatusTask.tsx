import React from "react";
import FormInput from "../../common/formInput";

interface StatusTaskProps {
  selectedStatus: boolean | undefined;
  onStatusChange: (status: boolean) => void;
}

const StatusTask: React.FC<StatusTaskProps> = ({
  selectedStatus,
  onStatusChange,
}) => {
  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onStatusChange(value === "true");
  };

  // Pretvaranje selectedStatus u boolean
  const isCheckedInProgress =
    selectedStatus === true || selectedStatus === undefined;
  const isCheckedDone = selectedStatus === false;

  return (
    <div className="flex items-center gap-4 py-6">
      <FormInput
        id="inProgress"
        type="radio"
        name="taskStatus"
        value="true"
        label="In Progress"
        checked={isCheckedInProgress}
        labelClassBg="p-6 bg-[#ff91420d] py-2 px-3 rounded-xl !text-[#ff9142] text-sm font-semibold peer-checked:text-primaryBlue"
        onChange={handleStatusChange}
        containerClassName="flex items-center flex-row-reverse"
      />

      <FormInput
        id="done"
        type="radio"
        name="taskStatus"
        value="false"
        label="Done"
        checked={isCheckedDone}
        labelClassBg="p-6 bg-[#2FC85019] py-2 px-3 rounded-xl !text-[#2fc850] text-sm font-semibold peer-checked:text-primaryBlue"
        onChange={handleStatusChange}
        containerClassName="flex items-center flex-row-reverse"
      />
    </div>
  );
};

export default StatusTask;
