import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type AgendaIconType = Partial<SVGIconProps>;

const AgendaIcon: FC<AgendaIconType> = ({ ...props }) => (
  <SVGIcon viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M6 1.5V3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 1.5V3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 9.75H11.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 12.75H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2.625C14.4975 2.76 15.75 3.7125 15.75 7.2375V11.8725C15.75 14.9625 15 16.5075 11.25 16.5075H6.75C3 16.5075 2.25 14.9625 2.25 11.8725V7.2375C2.25 3.7125 3.5025 2.7675 6 2.625H12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
  </SVGIcon>
);

export default AgendaIcon;
