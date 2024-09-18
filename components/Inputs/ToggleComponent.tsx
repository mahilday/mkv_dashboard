import React from "react";

interface IToggleProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "className"
  > {
  innerBgColor?: string;
  className?: string;
}

const ToggleComponent: React.FC<IToggleProps> = ({
  className = "",
  ...props
}) => {
  return (
    <input
      type="checkbox"
      className={`toggle toggle-sm ${className}`}
      {...props}
    />
  );
};

export default ToggleComponent;
