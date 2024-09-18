import { lightColors } from "@/constants/colors";

export const tabVariants = {
  primary: {
    boxed: {
      bg: "!bg-light-purple !text-white",
      sm: {
        tab: "tabs tabs-boxed tabs-sm",
      },
      md: {
        tab: "tabs tabs-boxed",
      },
      lg: {
        tab: "tabs tabs-boxed tabs-lg",
      },
    },
    lifted: {
      bg: `[--tab-border-color:${lightColors.purple.DEFAULT}]`,
      sm: {
        tab: "tabs tabs-lifted tabs-sm",
      },
      md: {
        tab: "tabs tabs-lifted",
      },
      lg: {
        tab: "tabs tabs-lifted tabs-lg",
      },
    },
    bordered: {
      bg: `[--tab-border-color:${lightColors.purple.DEFAULT}]`,
      sm: {
        tab: "tabs tabs-bordered tabs-sm",
      },
      md: {
        tab: "tabs tabs-bordered",
      },
      lg: {
        tab: "tabs tabs-bordered tabs-lg",
      },
    },
  },
};
