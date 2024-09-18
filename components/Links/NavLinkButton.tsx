"use client";

import { ReactNode, FC } from "react";
import Icon, { IconProps } from "../Icons/Icon";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { TIconPack } from "@/assets/icons";
import variants, { VariantTypes } from "./variants";
import ComponentLoader from "../Loaders/ComponentLoader";

export interface NavLinkButtonProps extends Omit<LinkProps, "className"> {
  children?: ReactNode;
  leftIcon?: TIconPack;
  rightIcon?: TIconPack;
  leftIconProps?: Omit<IconProps, "name">;
  rightIconProps?: Omit<IconProps, "name">;
  isLoading?: boolean;
  className?: string;
  buttonStyle?: string;
  shapeClassName?: string;
  variant?: VariantTypes;
  isOpen?: boolean;
  handleClick?: () => void;
}

const NavLinkButton: FC<NavLinkButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  leftIconProps,
  rightIconProps,
  isLoading,
  className = "",
  buttonStyle = "",
  isOpen,
  href,
  variant = "primary",
  shapeClassName = "",
  ...props
}) => {
  const pathName = usePathname();
  const iconSize = 18;
  const isActive = pathName === href;

  const classes = [
    buttonStyle,
    `${isOpen ? "px-5 flex" : "flex justify-center"}`,
    `shrink-0  transition items-center gap-3 text-gray-400 bg-transparent transition-all duration-300 ease-in-out hover:rounded-md h-[44px]`,
    shapeClassName,
    className,
    variants?.[variant][isActive ? "active" : "inactive"].button,
  ].join(" ");

  return (
    <Link
      aria-busy={isLoading}
      className={`w-full flex ${isOpen ? "" : "justify-center"} items-center`}
      href={href || "#"}
      {...props}
    >
      <span className={classes}>
        {isLoading ? (
          <ComponentLoader />
        ) : (
          <>
            {leftIcon && (
              <div className="flex shrink-0">
                <Icon
                  color={
                    variants?.[variant][isActive ? "active" : "inactive"].icon
                  }
                  name={leftIcon}
                  size={iconSize}
                  {...leftIconProps}
                />
              </div>
            )}
            {isOpen ? (
              <>
                {children}
                {rightIcon && (
                  <div className="flex shrink-0">
                    <Icon
                      color={
                        variants[variant][isActive ? "active" : "inactive"].icon
                      }
                      name={rightIcon}
                      size={iconSize}
                      {...rightIconProps}
                    />
                  </div>
                )}
              </>
            ) : null}
          </>
        )}
      </span>
    </Link>
  );
};

export default NavLinkButton;
