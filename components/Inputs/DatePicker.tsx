"use client";
import { FC, useState } from "react";

import Datepicker from "tailwind-datepicker-react";
import { IOptions } from "tailwind-datepicker-react/types/Options";
import TextInput from "./TextInput";

export type DatePickerProps = {
  error?: string;
  helperText?: string;
  helperTextClassName?: string;
  label?: string;
  labelClassName?: string;
  required?: boolean;
  minDate?: Date;
  maxDate?: Date;
  handleChange: (val: Date) => void;
  value?: Date;
};

const DatePicker: FC<DatePickerProps> = ({
  error,
  helperText,
  helperTextClassName,
  required,
  minDate,
  maxDate,
  value,
  handleChange,
}) => {
  const options: IOptions = {
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate,
    minDate,
    theme: {
      background: "bg-white",
      todayBtn: "bg-light-primary text-white dark:bg-light-primary",
      clearBtn:
        "bg-white text-light-primary dark:bg-white dark:text-dark-primary border-light-primary dark:border-dark-primary",
      icons: "text-light-primary dark:text-white",
      text: "text-black",
      disabledText: "!text-light-gray dark:text-dark-gray",
      input: "dark:bg-white dark:text-dark-gray",
      inputIcon: "",
      selected:
        "bg-light-primary text-white dark:text-white-300 !border border-light-primary rounded-md",
    },

    datepickerClassNames: "absolute",
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  };
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="w-full">
      <div className="flex flex-col items-stretch">
        <div className="relative flex items-center">
          <Datepicker
            onChange={handleChange}
            options={options}
            setShow={() => setShow(!show)}
            show={show}
            value={value}
          >
            <TextInput
              type="text"
              label="Enter Date"
              required={required}
              placeholder="Select Date"
              value={value?.toLocaleDateString()}
              onFocus={() => setShow(true)}
              leftIcon="calendar"
              readOnly
            />
          </Datepicker>
        </div>
      </div>
      {error || helperText ? (
        <span
          className={`text-xs ${
            error ? "text-light-red" : "text-gray-400"
          } ${helperTextClassName}`}
        >
          {error || helperText}
        </span>
      ) : null}
    </div>
  );
};

export default DatePicker;
