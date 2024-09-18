import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type AddSquareIconType = Partial<SVGIconProps>;

const AddSquareIcon: FC<AddSquareIconType> = ({ ...props }) => (
  <SVGIcon viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M6.66675 10H13.3334"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 13.3334V6.66669"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5V7.50002C18.3334 3.33335 16.6667 1.66669 12.5001 1.66669H7.50008C3.33341 1.66669 1.66675 3.33335 1.66675 7.50002V12.5C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVGIcon>
);

export default AddSquareIcon;
