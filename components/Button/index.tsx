"use client";

import { TIconPack } from "@/assets/icons";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import IconComponent from "../Icons/Icon";
import variants, { VariantTypes } from "./variants";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: VariantTypes;
  loading?: boolean;
  children?: ReactNode;
  leftIcon?: TIconPack;
  rightIcon?: TIconPack;
  innerTextClassname?: string;
}

const Button: FC<ButtonProps> = ({
  leftIcon,
  rightIcon,
  loading,
  children,
  variant = "primary",
  className = "",
  innerTextClassname = "",
  disabled,
  ...props
}) => {
  const iconSize = 18;
  const text = [variants[variant]?.text, innerTextClassname].join(" ");
  const classes = [variants[variant].button, className].join(" ");
  return (
    <button
      className={`btn ${classes}`}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <span className="loading loading-dots loading-md"></span>
      ) : (
        <>
          {leftIcon ? <IconComponent name={leftIcon} size={iconSize} /> : null}
          <p className={`${text}`}>{children}</p>
          {rightIcon ? (
            <IconComponent name={rightIcon} size={iconSize} />
          ) : null}
        </>
      )}
    </button>
  );
};

export default Button;
