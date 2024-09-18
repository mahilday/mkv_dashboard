import { useState, useEffect } from "react";
import breakpoints, { ScreenType } from "@/constants/breakpoints";

export const useScreenType = (): ScreenType | null => {
  const [screenType, setScreenType] = useState<ScreenType | null>(null);

  useEffect(() => {
    const getScreenType = (): ScreenType => {
      const width = window.innerWidth;

      if (width < breakpoints.sm) return "mobile";
      if (width >= breakpoints.sm && width < breakpoints.lg) return "tablet";
      if (width >= breakpoints.lg && width < breakpoints.xl) return "desktop";
      return "largeDesktop";
    };

    const handleResize = () => {
      setScreenType(getScreenType());
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
};
