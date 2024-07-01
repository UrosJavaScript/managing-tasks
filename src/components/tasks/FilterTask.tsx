import React, { useEffect, useState } from "react";
import FormInput from "../../common/formInput";

interface FilterTaskProps {
  selectedPriority?: string | undefined;
  onSelectPriority: (priority: string) => void;
}

const FilterTask: React.FC<FilterTaskProps> = ({
  selectedPriority,
  onSelectPriority,
}) => {
  const [internalSelectedPriority, setInternalSelectedPriority] =
    useState<string>("");

  useEffect(() => {
    setInternalSelectedPriority(selectedPriority ?? "");
  }, [selectedPriority]);

  const handlePriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const priority = event.target.value;
    setInternalSelectedPriority(priority);
    onSelectPriority(priority);
  };

  return (
    <div className="flex items-center gap-4 max-md:flex-wrap max-md:justify-center">
      <FormInput
        id="low"
        type="radio"
        name="taskPriority"
        value="Low"
        label="Low"
        checked={internalSelectedPriority === "Low"}
        className="!h-6 !w-6 border-gray-400 peer-checked:border-primaryBlue"
        containerClassName="flex items-center flex-row-reverse gap-3"
        labelClassBg="p-6 bg-[#2FC8501A] py-2 px-3 rounded-xl !text-[#2fc850] text-sm font-semibold peer-checked:text-primaryBlue"
        onChange={handlePriorityChange}
      />
      <FormInput
        id="medium"
        type="radio"
        name="taskPriority"
        value="Medium"
        label="Medium"
        checked={internalSelectedPriority === "Medium"}
        className="!h-6 !w-6 border-gray-400 peer-checked:border-primaryBlue"
        containerClassName="flex items-center flex-row-reverse gap-3"
        labelClassBg="p-6 bg-[#FF914226] py-2 px-3 rounded-xl !text-[#ff9142] text-sm font-semibold peer-checked:text-primaryBlue"
        onChange={handlePriorityChange}
      />
      <FormInput
        id="high"
        type="radio"
        name="taskPriority"
        value="High"
        label="High"
        checked={internalSelectedPriority === "High"}
        className="!h-6 !w-6 border-gray-400 peer-checked:border-primaryBlue"
        containerClassName="flex items-center flex-row-reverse gap-3"
        labelClassBg="p-6 bg-[#FF424226] py-2 px-3 rounded-xl !text-[#ff4242] text-sm font-semibold peer-checked:text-primaryBlue"
        onChange={handlePriorityChange}
      />
    </div>
  );
};

export default FilterTask;
