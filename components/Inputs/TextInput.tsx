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
  leftIconClassName,
  rightIconClassName,
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
        className={`input flex items-center gap-2 min-w-[240px] w-full ${className} `}
      >
        {leftIcon ? (
          <div className={leftIconClassName} onClick={onIconClick}>
            <IconComponent name={leftIcon} size={iconSize} />
          </div>
        ) : null}
        <input className={`flex-1 font-normal`} {...props} />
        {rightIcon ? (
          <div className={rightIconClassName} onClick={onIconClick}>
            <IconComponent name={rightIcon} size={iconSize} />
          </div>
        ) : null}
      </div>
      <div className="label">
        <span className="label-text-alt">{bottomLeftLabel}</span>
        <span className="label-text-alt">{bottomRightLabel}</span>
      </div>
    </div>
  );
};

export default TextInput;
