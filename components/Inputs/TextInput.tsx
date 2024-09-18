import { TIconPack } from "@/assets/icons";
import React, { FC, InputHTMLAttributes } from "react";
import IconComponent from "../Icons/Icon";
import Label from "../Label";

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: TIconPack;
  rightIcon?: TIconPack;
  leftIconClassName?: string;
  rightIconClassName?: string;
  label?: string;
  labelClassName?: string;
  topRightLabel?: string;
  onIconClick?(): void;
  bottomRightLabel?: string;
  bottomLeftLabel?: string;
  iconSize?: number;
  required?: boolean;
}

const TextInput: FC<ITextInputProps> = ({
  onIconClick,
  leftIcon,
  rightIcon,
  leftIconClassName = "text-light-gray-400 dark:text-dark-primary-200",
  rightIconClassName = "text-light-gray-400 dark:text-dark-primary-200",
  topRightLabel,
  bottomLeftLabel,
  bottomRightLabel,
  labelClassName,
  label,
  className,
  iconSize = 18,
  required,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="label">
        {label && (
          <Label
            label={label}
            labelClassName={labelClassName}
            required={required}
          />
        )}
        <span className="label-text-alt">{topRightLabel}</span>
      </div>
      <div
        className={`input flex items-center gap-2 overscroll-contain w-full ${className} `}
      >
        {leftIcon && (
          <div
            className={`flex-shrink-0 ${leftIconClassName}`}
            onClick={onIconClick}
          >
            <IconComponent name={leftIcon} size={iconSize} />
          </div>
        )}
        <input
          className={`w-11/12 font-normal text-light-gray dark:text-light-common-white`}
          {...props}
        />
        {rightIcon && (
          <div
            className={`flex-shrink-0 ${rightIconClassName} cursor-pointer`}
            onClick={onIconClick}
          >
            <IconComponent name={rightIcon} size={iconSize} />
          </div>
        )}
      </div>
      <div className="label">
        <span className="label-text-alt">{bottomLeftLabel}</span>
        <span className="label-text-alt">{bottomRightLabel}</span>
      </div>
    </div>
  );
};

export default TextInput;
