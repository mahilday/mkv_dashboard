import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type ToggleMenuIconType = Partial<SVGIconProps>;

const ToggleMenuIcon: FC<ToggleMenuIconType> = ({ ...props }) => (
  <SVGIcon viewBox="0 0 17 11" fill="none" {...props}>
    <path
      d="M7.63519 1L2.98975 5.64544L7.63519 10.2909"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.9998 5.64545H3.11963"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 0.999995L1 10.1837"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVGIcon>
);

export default ToggleMenuIcon;
