import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type TaskIconType = Partial<SVGIconProps>;

const TaskIcon: FC<TaskIconType> = ({ ...props }) => (
  <SVGIcon viewBox="0 0 22 22" fill="none" {...props}>
    <path
      d="M11.3391 8.14H16.1516"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.84839 8.14L6.53589 8.8275L8.59839 6.765"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.3391 14.5567H16.1516"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.84839 14.5567L6.53589 15.2442L8.59839 13.1817"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.24992 20.1667H13.7499C18.3333 20.1667 20.1666 18.3333 20.1666 13.75V8.25C20.1666 3.66666 18.3333 1.83333 13.7499 1.83333H8.24992C3.66659 1.83333 1.83325 3.66666 1.83325 8.25V13.75C1.83325 18.3333 3.66659 20.1667 8.24992 20.1667Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVGIcon>
);

export default TaskIcon;
