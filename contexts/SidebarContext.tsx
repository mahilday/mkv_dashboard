"use client";
import { useScreenType } from "@/hooks/useScreenType";
import {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useState,
} from "react";

interface SidebarContextType {
  isSidebarOpen: boolean;
  handleToggleSidebar: () => void;
  sidebarVariants: any;
  toggleButtonVariants: any;
  sidebarWidth: number;
  collapsedSidebarWidth: number;
}

const SidebarContext = createContext<SidebarContextType>({
  isSidebarOpen: false,
  handleToggleSidebar: () => {},
  sidebarVariants: {},
  toggleButtonVariants: {},
  collapsedSidebarWidth: 80,
  sidebarWidth: 250,
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const screenType = useScreenType(); // Get current screen type
  const isSidebarOpenByDefault =
    screenType === "desktop" || screenType === "largeDesktop";

  const [isSidebarOpen, setIsSidebarOpen] = useState(isSidebarOpenByDefault); // Initialize state with the default value

  const sidebarWidth = 250;
  const collapsedSidebarWidth = 80;

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState); // Toggle sidebar state
  };

  const sidebarVariants = {
    open: {
      width: sidebarWidth,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    collapsed: {
      width: collapsedSidebarWidth,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const toggleButtonVariants = {
    open: {
      rotate: 0,
      right: -20,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    collapsed: {
      rotate: 180,
      right: -40,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  // Update sidebar state based on screen type changes
  useEffect(() => {
    setIsSidebarOpen(isSidebarOpenByDefault);
  }, [screenType, isSidebarOpenByDefault]);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        handleToggleSidebar,
        sidebarVariants,
        toggleButtonVariants,
        sidebarWidth,
        collapsedSidebarWidth,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};
