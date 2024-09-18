"use client";
import { FC } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import { authNavigationItems } from "@/constants/sidebar";
import { motion } from "framer-motion";
import NavLinkButton from "./Links/NavLinkButton";
import ThemeToggle from "./ThemeToggle";
import IconComponent from "./Icons/Icon";
import Image from "next/image";
import Logo from "@/assets/svgs/logo.svg";
import { appTitle } from "@/constants/general";

const Sidebar: FC = () => {
  const {
    isSidebarOpen,
    sidebarVariants,
    toggleButtonVariants,
    handleToggleSidebar,
  } = useSidebar();

  const sideBarType = authNavigationItems;

  return (
    <section
      className={`fixed border-r border-light-primary-300 dark:border-dark-common-black flex flex-col top-0  min-h-screen h-full left-0 z-50 bg-light-common-white gap-5 dark:bg-light-gray`}
    >
      <section className="flex justify-between">
        <div className={`ml-8 ${isSidebarOpen ? "flex" : "hidden"}`}>
          <Image src={Logo} width={135} height={54} alt={appTitle} />
        </div>
        <motion.div
          className="w-[35px] h-[35px] px-2 rounded-md flex items-center justify-center bg-light-common-light dark:bg-transparent text-light-gray dark:text-dark-common-white"
          variants={toggleButtonVariants}
          initial={isSidebarOpen ? "open" : "collapsed"}
          animate={isSidebarOpen ? "open" : "collapsed"}
          onClick={handleToggleSidebar}
        >
          <IconComponent name="toggle-menu" />
        </motion.div>
      </section>
      <motion.div
        className={` h-full  px-[15px] relative scrollbar-custom overflow-x-hidden overflow-y-auto `}
        variants={sidebarVariants}
        initial={isSidebarOpen ? "open" : "collapsed"}
        animate={isSidebarOpen ? "open" : "collapsed"}
      >
        <div className="flex flex-col justify-between gap-6 pt-10 font-semibold">
          <nav className="flex flex-1 flex-col h-max items-stretch gap-3">
            {sideBarType.map((item, index) => (
              <NavLinkButton
                key={item?.icon ?? "" + item?.href ?? "" + index}
                href={item.href ?? ""}
                leftIcon={item.icon}
                isOpen={isSidebarOpen}
              >
                <h6 className="-tracking-2">{item.title}</h6>
              </NavLinkButton>
            ))}
          </nav>
        </div>
      </motion.div>
      <div className="flex relative shadow-sm justify-center">
        <ThemeToggle />
      </div>
    </section>
  );
};

export default Sidebar;
