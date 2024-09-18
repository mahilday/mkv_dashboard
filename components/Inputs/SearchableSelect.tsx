import React, { useState, FC, useEffect, useRef } from "react";
import TextInput from "./TextInput";
import EllipsesLoader from "../Loaders/Ellipses";

export type OptionType = {
  label: string;
  value: string | number;
};

export type SearchableSelectProps = {
  options: OptionType[];
  onChange?: (selected: OptionType) => void;
  placeholder?: string;
  isSearchable?: boolean;
  className?: string;
  dropdownClassName?: string;
  label?: string;
  required?: boolean;
  inputClassName?: string;
  isLoading?: boolean;
  optionClassName?: string;
  selectedOptionClassName?: string;
};

const SearchableSelect: FC<SearchableSelectProps> = ({
  options,
  onChange,
  placeholder = "Select...",
  className = "",
  label,
  required,
  isLoading,
  dropdownClassName = "",
  optionClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<OptionType[]>(options);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [inputFocused, setInputFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredOptions(options);
    } else {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [searchTerm, options]);

  const handleSelect = (option: OptionType) => {
    setSelectedOption(option);
    setSearchTerm("");
    setIsOpen(false);
    onChange?.(option);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
    if (!searchTerm) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const displayValue = inputFocused ? searchTerm : selectedOption?.label || "";

  return (
    <div ref={dropdownRef} className={`relative h-max w-full ${className}`}>
      <TextInput
        type="text"
        rightIcon="chevron-down"
        placeholder={placeholder}
        value={displayValue}
        onBlur={handleBlur}
        onFocus={() => {
          setInputFocused(true);
          setIsOpen(true);
        }}
        label={label}
        required={required}
        className={`w-full border outline-none ${
          isOpen
            ? "!border-light-primary"
            : "border-light-primary-100 dark:border-dark-gray-400"
        }`}
        onChange={handleInputChange}
        onIconClick={() => setIsOpen(!isOpen)}
        rightIconClassName={`${
          isOpen ? "transform rotate-180" : "transform rotate-0"
        }  transition-all duration-300 text-light-gray-400 dark:text-dark-primary-200`}
      />

      {isOpen && (
        <div
          className={`absolute max-h-[50dvh] overflow-y-auto overscroll-contain z-10 w-full -mt-4 bg-white dark:bg-dark-common-dark rounded-md shadow-lg border !border-light-primary ${dropdownClassName}`}
        >
          <ul className="menu menu-compact">
            {isLoading ? (
              <div className="flex items-center justify-center">
                <EllipsesLoader />
              </div>
            ) : filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className={`cursor-pointer text-light-gray dark:text-dark-common-light h-46 flex justify-center dark:hover:bg-dark-primary hover:bg-light-primary-200 rounded-md px-4 ${
                    selectedOption?.value === option.value
                      ? "bg-light-primary text-white"
                      : ""
                  } ${optionClassName}`}
                  onMouseDown={() => handleSelect(option)}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500 text-center">
                No options found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;
