"use client";
import React, { Suspense } from "react";
import ComponentLoader from "./Loaders/ComponentLoader";
import { useSidebar } from "@/contexts/SidebarContext";
import Header from "./Header";

const Main = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen, sidebarWidth, collapsedSidebarWidth } = useSidebar();

  const mainStyle = {
    marginLeft: isSidebarOpen ? sidebarWidth : collapsedSidebarWidth,
  };

  return (
    <div
      style={mainStyle}
      className="flex h-full min-w-[20rem] flex-1 flex-col items-stretch overflow-y-auto overscroll-contain sm:overflow-y-visible"
    >
      <Header />
      <Suspense
        fallback={
          <ComponentLoader
            ellipsesLoaderProps={{
              className: "transform",
              contentContainerStyle: "h-4 w-4",
            }}
          />
        }
      >
        <main className="flex-1 mx-auto overscroll-contain container sm:overflow-y-auto">
          {children}
        </main>
      </Suspense>
    </div>
  );
};

export default Main;
