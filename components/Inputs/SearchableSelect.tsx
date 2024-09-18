import React, { useState, FC, useEffect } from "react";
import TextInput from "./TextInput"; // Assuming TextInput is your custom input component

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
  dropdownClassName = "",
  optionClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<OptionType[]>(options);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    // Filter options based on search term
    if (searchTerm === "") {
      setFilteredOptions(options);
    } else {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, options]);

  const handleSelect = (option: OptionType) => {
    setSelectedOption(option);
    setSearchTerm(""); // Clear search term after selection
    setIsOpen(false);
    onChange?.(option);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true); // Open the dropdown when typing
  };

  const handleBlur = () => {
    setInputFocused(false);
    if (!searchTerm) {
      setIsOpen(false);
    }
  };

  const displayValue = inputFocused ? searchTerm : selectedOption?.label || ""; // Display selectedOption when not typing

  return (
    <div className={`relative h-max w-full ${className}`}>
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
        className={`w-full text-light-gray border outline-none ${
          isOpen ? "!border-light-primary" : "border-light-primary-100"
        }`}
        onChange={handleInputChange}
        onIconClick={() => setIsOpen(!isOpen)}
        rightIconClassName={`${
          isOpen ? "transform rotate-180" : "transform rotate-0"
        } transition-all duration-300`}
      />

      {isOpen && (
        <div
          className={`absolute z-10 w-full -mt-4 bg-white rounded-md shadow-lg border !border-light-primary ${dropdownClassName}`}
        >
          <ul className="menu menu-compact">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className={`cursor-pointer text-light-gray h-46 flex justify-center hover:bg-light-primary-200 rounded-md px-4 ${
                    selectedOption?.value === option.value
                      ? "bg-light-primary text-white" // Active state for selected option
                      : ""
                  } ${optionClassName}`}
                  onMouseDown={() => handleSelect(option)} // Use onMouseDown to prevent blur event from closing the dropdown
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No options found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;
