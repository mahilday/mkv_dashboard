const lightColors = {
  primary: {
    100: "#EEF1F9",
    200: "#E9F5F7",
    300: "#CDD6E9",
    DEFAULT: "#75C5C1",
  },
  common: {
    white: "#FFFFFF",
    light: "#F7F7F7",
    text: "#7988A9",
  },
  purple: {
    DEFAULT: "#41245F",
  },
  gray: {
    200: "#BAC1CC",
    300: "#ACAEB7",
    400: "#464B50",
    450: "#6C7278",
    500: "#1A1C1E",
    600: "#2D3748",
    700: "#252A41",
    DEFAULT: "#1A1C1E",
  },
  red: {
    200: "#FFE9EA",
    500: "#FF515D",
    DEFAULT: "#FF515D",
  },
} as const;

export type lightColorsType = typeof lightColors;

const darkColors = {
  primary: {
    100: "#EEF1F9",
    200: "#E9F5F7",
    DEFAULT: "#75C5C1",
  },
  common: {
    white: "#FFFFFF",
    dark: "#1A202C", // remove
    black: "#000000",
    light: "#F7F7F7",
    text: "#7988A9",
  },
  purple: {
    DEFAULT: "#41245F",
  },
  gray: {
    200: "#BAC1CC",
    300: "#ACAEB7",
    400: "#464B50",
    450: "#6C7278",
    500: "#1A1C1E",
    600: "#2D3748",
    700: "#252A41",
    DEFAULT: "#1A1C1E",
  },
  red: {
    200: "#FFE9EA",
    500: "#FF515D",
    DEFAULT: "#FF515D",
  },
};

export type darkColorsType = typeof darkColors;

export { lightColors, darkColors };
