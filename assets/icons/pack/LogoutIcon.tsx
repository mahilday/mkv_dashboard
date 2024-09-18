import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type LogoutIconType = Partial<SVGIconProps>;

const LogoutIcon: FC<LogoutIconType> = ({ ...props }) => (
  <SVGIcon viewBox="0 0 18 18" fill="none" {...props}>
    <path
      d="M6.67505 5.66999C6.90755 2.96999 8.29505 1.86749 11.3325 1.86749H11.43C14.7825 1.86749 16.125 3.20999 16.125 6.56249V11.4525C16.125 14.805 14.7825 16.1475 11.43 16.1475H11.3325C8.31755 16.1475 6.93005 15.06 6.68255 12.405"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.2501 9H2.71509"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.3875 6.48749L1.875 8.99999L4.3875 11.5125"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVGIcon>
);

export default LogoutIcon;
