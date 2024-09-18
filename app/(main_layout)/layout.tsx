import ChatPopUp from "@/components/ChatPopUp";
import Main from "@/components/Main";
import Sidebar from "@/components/SideBar";
import { SidebarProvider } from "@/contexts/SidebarContext";
import React from "react";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <Main>{children}</Main>
      </div>
      <ChatPopUp />
    </SidebarProvider>
  );
};

export default MainLayout;
