import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type NotificationIconType = Partial<SVGIconProps>;

const NotificationIcon: FC<NotificationIconType> = ({ ...props }) => (
  <SVGIcon viewBox="0 0 18 18" fill="none" {...props}>
    <path
      d="M9 4.83002V7.32752"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M9.01492 1.5C6.25492 1.5 4.01992 3.735 4.01992 6.495V8.07C4.01992 8.58 3.80992 9.345 3.54742 9.78L2.59492 11.37C2.00992 12.3525 2.41492 13.4475 3.49492 13.8075C7.07992 15 10.9574 15 14.5424 13.8075C15.5549 13.47 15.9899 12.285 15.4424 11.37L14.4899 9.78C14.2274 9.345 14.0174 8.5725 14.0174 8.07V6.495C14.0099 3.75 11.7599 1.5 9.01492 1.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M11.4974 14.115C11.4974 15.4875 10.3724 16.6125 8.99994 16.6125C8.31744 16.6125 7.68744 16.3275 7.23744 15.8775C6.78744 15.4275 6.50244 14.7975 6.50244 14.115"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </SVGIcon>
);

export default NotificationIcon;
