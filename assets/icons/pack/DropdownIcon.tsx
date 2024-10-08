import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type DropdownIconType = Partial<SVGIconProps>;

const DropdownIcon: FC<DropdownIconType> = ({ ...props }) => (
  <SVGIcon viewBox="0 0 14 14" fill="none" {...props}>
    <path
      d="M10.4533 4.77167H6.81914H3.54664C2.98664 4.77167 2.70664 5.44833 3.10331 5.845L6.12498 8.86667C6.60914 9.35083 7.39664 9.35083 7.88081 8.86667L9.02998 7.7175L10.9025 5.845C11.2933 5.44833 11.0133 4.77167 10.4533 4.77167Z"
      fill="currentColor"
    />
  </SVGIcon>
);

export default DropdownIcon;
