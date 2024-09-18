import breakpoints, { BreakpointKey } from "@/constants/breakpoints";
import { useState, useEffect } from "react";

export const useBreakpoint = (): BreakpointKey | null => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakpointKey | null>(null);

  useEffect(() => {
    const getBreakpoint = () => {
      const width = window.innerWidth;

      if (width < breakpoints.sm) return "xs";
      if (width >= breakpoints.sm && width < breakpoints.md) return "sm";
      if (width >= breakpoints.md && width < breakpoints.lg) return "md";
      if (width >= breakpoints.lg && width < breakpoints.xl) return "lg";
      if (width >= breakpoints.xl && width < breakpoints["2xl"]) return "xl";
      return "2xl";
    };

    const handleResize = () => {
      setCurrentBreakpoint(getBreakpoint());
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return currentBreakpoint;
};
