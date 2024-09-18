"use client";

import { useAnimation } from "framer-motion";
import useAppState from "./useAppState";

type UseToggleSidebarAnimationProps = {
  sidebarWidth?: number;
};

const useToggleSidebarAnimation = (
  props: UseToggleSidebarAnimationProps = {}
) => {
  const { sidebarWidth = 250 } = props;
  const { isSidebarOpen, handleToggleSidebar: toggleSidebar } = useAppState();
  const collapsedSidebarWidth = 80;

  // Framer motion animation controls
  const sidebarControls = useAnimation();
  const toggleButtonControls = useAnimation();

  const handleOpenSidebar = async () => {
    await sidebarControls.start({
      marginLeft: 0,
      transition: { duration: 0.5 },
    });
  };

  const handleCloseSidebar = async () => {
    await sidebarControls.start({
      marginLeft: -sidebarWidth,
      transition: { duration: 0.5 },
    });
  };

  const handleOpenToggleButton = async () => {
    await toggleButtonControls.start({
      right: -20,
      rotate: 0,
      transition: { duration: 0.5 },
    });
  };

  const handleCloseToggleButton = async () => {
    await toggleButtonControls.start({
      right: -40,
      rotate: 180,
      transition: { duration: 0.5 },
    });
  };

  const handleToggleSidebar = () => {
    if (isSidebarOpen) {
      handleCloseSidebar();
      handleCloseToggleButton();
    } else {
      handleOpenSidebar();
      handleOpenToggleButton();
    }
    toggleSidebar();
  };

  return {
    handleToggleSidebar,
    sidebarControls,
    toggleButtonControls,
    handleCloseSidebar,
    handleCloseToggleButton,
    handleOpenSidebar,
    handleOpenToggleButton,
  };
};

export default useToggleSidebarAnimation;
