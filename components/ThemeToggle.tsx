import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import ToggleComponent from "./Inputs/ToggleComponent";
import { useSidebar } from "@/contexts/SidebarContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { isSidebarOpen } = useSidebar();
  return (
    <div className="flex py-3 items-center gap-4">
      <h6 className={isSidebarOpen ? "" : "hidden"}>
        {theme === "light" ? "Light" : "Dark"} mode
      </h6>
      <ToggleComponent
        onChange={toggleTheme}
        checked={theme === "light" ? true : false}
        className="custom-toggle"
      />
    </div>
  );
};

export default ThemeToggle;
