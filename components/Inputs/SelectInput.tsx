import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  HtmlHTMLAttributes,
  useId,
} from "react";
import variants from "./variants";

export type OptionType = {
  label: string;
  value: string | number;
};

export type InputSelectProps = {
  error?: string;
  helperText?: string;
  helperTextClassName?: string;
  label?: string;
  labelClassName?: string;
  required?: boolean;
  intent?: "underline" | "outline";
  inputClassName?: string;
  selectClassName?: string;
  className?: string;
  inputProps?: HtmlHTMLAttributes<HTMLInputElement>;
  selectProps?: HtmlHTMLAttributes<HTMLSelectElement>;
  options: OptionType[];
  selectedValue?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onSelect?: (selectedValue: string) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

const InputSelect: FC<InputSelectProps> = ({
  error,
  helperText,
  helperTextClassName,
  label,
  labelClassName,
  required,
  intent = "outline",
  className = "",
  inputClassName = "",
  selectClassName = "",
  inputProps,
  selectProps,
  onChange,
  options,
  onBlur,
  onSelect,
  selectedValue,
  value,
  placeholder,
  type = "text",
}) => {
  const inputId = useId();

  const outlinedClassName = variants.outline;
  const underlineClassName =
    "border-0 border-b border-b-extras-border-dark focus-within:border-b-green-400 px-0 rounded-none";
  const intentClassName =
    intent === "outline" ? outlinedClassName : underlineClassName;

  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            className={`label-text text-sm text-gray-extras-100 ${labelClassName}`}
            htmlFor={inputId}
          >
            {label}
            {required && <span className="text-sm text-red-400"> *</span>}
          </label>
        )}
        <div className={`join w-full ${className}`}>
          <div className="flex flex-1">
            <input
              className={`input join-item w-full flex-1 bg-transparent focus-within:outline-none ${intentClassName} ${inputClassName}`}
              onBlur={onBlur}
              onChange={onChange}
              placeholder={placeholder}
              type={type}
              value={value}
              {...inputProps}
            />
          </div>
          <select
            className={`join-item select select-bordered bg-white-200 focus-within:outline-none ${selectClassName}`}
            onChange={(e) => onSelect?.(e.target.value)}
            value={selectedValue}
            {...selectProps}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {error || helperText ? (
        <span
          className={`text-xs ${
            error ? "text-red-500" : "text-gray-400"
          } ${helperTextClassName}`}
        >
          {error || helperText}
        </span>
      ) : null}
    </div>
  );
};

export default InputSelect;
