import { FC } from "react";
import { tabVariants } from "./variants";
import { TIconPack } from "@/assets/icons";
import IconComponent from "../Icons/Icon";

interface TabsProps {
  accentColor: "primary";
  size?: "sm" | "md" | "lg";
  tabType: "lifted" | "boxed" | "bordered";
  tabList: {
    icon: TIconPack;
    title: string;
    onClick?: () => void;
    active: boolean;
  }[];
}

const Tabs: FC<TabsProps> = ({
  accentColor,
  size = "md",
  tabList,
  tabType,
}) => {
  const tabClassName = tabVariants[accentColor][tabType][size].tab;
  const color = tabVariants[accentColor][tabType].bg;
  return (
    <div
      role="tablist"
      className={`flex w-full items-center gap-2 h-46 bg-white dark:bg-dark-gray  border dark:border-none border-light-primary-300 ${tabClassName}`}
    >
      {tabList?.map((item, index) => (
        <a
          role="tab"
          key={index}
          className={`tab flex items-center h-full gap-2 transition duration-300 hover:opacity-80 ${
            item?.active
              ? `tab-active ${color}`
              : "text-light-gray dark:text-dark-gray-200"
          }`}
          onClick={item?.onClick}
        >
          <IconComponent name={item?.icon} size={22} />
          <span className="hidden sm:flex">{item.title}</span>
        </a>
      ))}
    </div>
  );
};

export default Tabs;
