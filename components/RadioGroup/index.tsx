import React, { useId } from "react";

type RadioGroupProps = {
  options: { label: string; value: string }[];
  name: string;
  onChange: (value: string) => void;
  selectedValue: string;
  required?: boolean;
  label?: string;
  labelClassName?: string;
};

const RadioGroup = ({
  options,
  name,
  selectedValue,
  onChange,
  required,
  labelClassName,
  label,
}: RadioGroupProps) => {
  const inputId = useId();

  return (
    <section className="flex flex-col gap-5">
      {label && (
        <label
          className={`label-text text-sm text-light-gray-400 dark:text-dark-common-light ${labelClassName}`}
          htmlFor={inputId}
        >
          {label}
          {required && <span className="text-sm text-red-400"> *</span>}
        </label>
      )}
      <div className="gap-4 flex items-center">
        {options.map((option) => (
          <div
            key={option.value}
            className={`form-control group w-[180px] bg-light-common-light dark:bg-dark-common-dark h-[54px] rounded-lg flex justify-center px-5 ${
              selectedValue === option.value
                ? "border border-light-primary"
                : ""
            }`}
          >
            <label className="label cursor-pointer w-max space-x-2">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={selectedValue === option.value}
                onChange={() => onChange(option.value)}
                className="radio appearance-none border transition-all duration-500 border-light-gray-450 rounded-full w-4 h-4 checked:h-3 checked:w-3 checked:bg-light-primary checked:border-light-primary checked:ring checked:ring-offset-2 checked:ring-light-primary"
              />
              <span className="label-text text-light-gray-450">
                {option.label}
              </span>
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RadioGroup;
