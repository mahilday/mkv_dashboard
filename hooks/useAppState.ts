import React, { useState } from "react";

const useAppState = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return {
    isSidebarOpen,
    handleToggleSidebar,
  };
};

export default useAppState;
