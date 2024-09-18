import { lightColors } from "@/constants/colors";

const variants = {
  primary: {
    active: {
      button:
        "!rounded-[10px] !bg-light-primary-200 dark:!bg-dark-common-dark !font-extrabold w-full dark:bg-dark-primary-200 text-light-primary  dark:text-dark-primary",
      icon: lightColors.primary.DEFAULT,
      loader: "bg-white",
    },
    inactive: {
      button:
        "!text-light-gray-400 hover:bg-light-primary-200 dark:hover:!bg-dark-primary-200 hover:!text-light-primary dark:hover:!text-dark-gray-400 rounded-[10px]",
      icon: lightColors.gray[400],
      loader: "bg-gray-400",
    },
  },
} as const;

export type VariantTypes = keyof typeof variants;

export default variants;
