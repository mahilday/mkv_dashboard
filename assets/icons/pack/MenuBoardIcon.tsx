import SVGIcon, { SVGIconProps } from "@/components/Icons/SVGIcon";
import { FC } from "react";

type MenuBoardIconType = Partial<SVGIconProps>;

const MenuBoardIcon: FC<MenuBoardIconType> = ({ ...props }) => (
  <SVGIcon viewBox="0 0 18 18" fill="none" {...props}>
    <path
      d="M16.4476 5.07001L13.9201 15.2175C13.7401 15.975 13.0651 16.5 12.2851 16.5H2.4301C1.2976 16.5 0.487609 15.39 0.825109 14.3025L3.9826 4.16254C4.2001 3.45754 4.85261 2.96997 5.58761 2.96997H14.8126C15.5251 2.96997 16.1176 3.40497 16.3651 4.00497C16.5076 4.32747 16.5376 4.69501 16.4476 5.07001Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M12 16.5H15.585C16.5525 16.5 17.31 15.6825 17.2425 14.715L16.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.26001 4.785L8.04002 1.54504"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.2849 4.79251L12.9899 1.53754"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.7749 9H11.7749"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.0249 12H11.0249"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVGIcon>
);

export default MenuBoardIcon;
