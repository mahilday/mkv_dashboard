import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type MinusIconType = Partial<SVGIconProps>;

const MinusIcon: FC<MinusIconType> = ({ ...props }) => (
  <SVGIcon viewBox="0 0 22 22" fill="none" {...props}>
    <path
      d="M5.5 11H16.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVGIcon>
);

export default MinusIcon;
