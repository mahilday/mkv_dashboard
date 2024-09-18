import React, { useId } from "react";

const Label = ({
  label,
  labelClassName,
  required,
}: {
  label?: string;
  labelClassName?: string;
  required?: boolean;
}) => {
  const inputId = useId();
  return (
    <div>
      {label && (
        <label
          className={`label-text text-sm text-light-gray-400 dark:text-dark-common-light ${labelClassName}`}
          htmlFor={inputId}
        >
          {label}
          {required && <span className="text-sm text-red-400"> *</span>}
        </label>
      )}
    </div>
  );
};

export default Label;
