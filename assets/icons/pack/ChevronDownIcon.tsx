import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type ChevronDownIconType = Partial<SVGIconProps>;

const ChevronDownIcon: FC<ChevronDownIconType> = ({ ...props }) => (
  <SVGIcon viewBox="0 0 18 18" fill="none" {...props}>
    <path
      d="M14.94 6.71249L10.05 11.6025C9.4725 12.18 8.5275 12.18 7.95 11.6025L3.06 6.71249"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVGIcon>
);

export default ChevronDownIcon;
