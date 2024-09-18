const breakpoints = {
  xs: 0,
  ms: 485,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1700,
};

export type ScreenType = "mobile" | "tablet" | "desktop" | "largeDesktop";

export type BreakpointKey = keyof typeof breakpoints;
export type BreakpointValue = (typeof breakpoints)[BreakpointKey];

export default breakpoints;
