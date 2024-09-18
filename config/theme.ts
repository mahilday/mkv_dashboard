import breakpoints from "@/constants/breakpoints";
import { darkColors, lightColors } from "@/constants/colors";

const theme = {
  breakpoints,
  colors: {
    lightColors,
    darkColors,
  },
  textStyles: {
    h1: {
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg:
          props.colorMode === "dark"
            ? darkColors.common.dark
            : lightColors.common.white,
        color: props.colorMode === "dark" ? "gray.200" : "gray.800",
      },
    }),
  },
};

export default theme;
