import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type CloseIconType = Partial<SVGIconProps>;

const CloseIcon: FC<CloseIconType> = ({ ...props }) => (
  <SVGIcon viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="11.9301" cy="11.891" r="9.3432" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.1792 8.17941C16.443 8.46794 16.4229 8.91566 16.1344 9.17941L8.82033 15.8654C8.5318 16.1291 8.08409 16.109 7.82033 15.8205C7.55658 15.532 7.57667 15.0843 7.8652 14.8205L15.1792 8.13455C15.4678 7.8708 15.9155 7.89088 16.1792 8.17941Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.17923 7.82059C8.46776 7.55683 8.91548 7.57692 9.17923 7.86545L15.8652 15.1795C16.1289 15.468 16.1089 15.9157 15.8203 16.1795C15.5318 16.4432 15.0841 16.4232 14.8203 16.1346L8.13437 8.82059C7.87061 8.53206 7.8907 8.08434 8.17923 7.82059Z"
      fill="white"
    />
  </SVGIcon>
);

export default CloseIcon;
