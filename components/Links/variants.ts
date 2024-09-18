import { lightColors } from "@/constants/colors";

const variants = {
  primary: {
    active: {
      button:
        "!rounded-md bg-light-primary-200 dark:bg-dark-primary-200 text-light-gray-400  dark:text-dark-gray-400",
      icon: lightColors.gray[400],
      loader: "bg-white",
    },
    inactive: {
      button:
        "hover:bg-light-primary-200 dark:hover:bg-dark-primary-200 hover:text-light-primary dark:hover:text-dark-gray-400",
      icon: "",
      loader: "bg-gray-400",
    },
  },
} as const;

export type VariantTypes = keyof typeof variants;

export default variants;
