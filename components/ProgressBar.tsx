import { lightColors } from "@/constants/colors";
import React, { FC } from "react";

type IProgressBarProps = {
  value: number;
  max?: number;
  className?: string;
  customColor?: string;
};

const ProgressBar: FC<IProgressBarProps> = ({
  value,
  max = 100,
  className = "progress-light-gray-700",
  customColor = lightColors.gray[700],
}) => {
  return (
    <div className="w-full">
      <progress
        className={`progress ${className}`}
        value={value}
        max={max}
        color={customColor}
      ></progress>
      <span className="text-sm text-light-gray-200 dark:text-dark-common-light ml-2">
        {value}%
      </span>
    </div>
  );
};

export default ProgressBar;
