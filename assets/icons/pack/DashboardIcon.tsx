import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type DashboardIconType = Partial<SVGIconProps>;

const DashboardIcon: FC<DashboardIconType> = ({ ...props }) => (
  <SVGIcon viewBox="0 0 22 22" fill="none" {...props}>
    <path
      d="M8.26825 2.60334L3.32742 6.45334C2.50242 7.09501 1.83325 8.46084 1.83325 9.49667V16.2892C1.83325 18.4158 3.56575 20.1575 5.69242 20.1575H16.3074C18.4341 20.1575 20.1666 18.4158 20.1666 16.2983V9.62501C20.1666 8.51584 19.4241 7.09501 18.5166 6.46251L12.8516 2.49334C11.5683 1.59501 9.50575 1.64084 8.26825 2.60334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 16.4908V13.7408"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVGIcon>
);

export default DashboardIcon;
