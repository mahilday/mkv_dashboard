import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type Document2IconType = Partial<SVGIconProps>;

const Document2Icon: FC<Document2IconType> = ({ ...props }) => (
  <SVGIcon viewBox="0 0 22 22" fill="none" {...props}>
    <path
      d="M19.25 6.41666V15.5833C19.25 18.3333 17.875 20.1667 14.6667 20.1667H7.33333C4.125 20.1667 2.75 18.3333 2.75 15.5833V6.41666C2.75 3.66666 4.125 1.83333 7.33333 1.83333H14.6667C17.875 1.83333 19.25 3.66666 19.25 6.41666Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.2917 4.125V5.95833C13.2917 6.96667 14.1167 7.79167 15.1251 7.79167H16.9584"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.33325 11.9167H10.9999"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.33325 15.5833H14.6666"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVGIcon>
);

export default Document2Icon;
