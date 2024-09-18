"use client";
import Button from "@/components/Button";
import Tabs from "@/components/Tabs";
import React, { useState } from "react";
import InstantUploadModal from "../modals/InstantUploadModal";
import useDialogue from "@/hooks/useDialogue";

const DocumentPageHeader = () => {
  const [currentComponent, setCurrentComponent] = useState<
    "dashboard" | "tasks" | "document"
  >("dashboard");
  const {
    dialogueId,
    isDialogueOpen,
    handleCloseDialogue,
    handleOpenDialogue,
  } = useDialogue();
  return (
    <section className="mt-[30px] mb-6 flex flex-col xl:flex-row justify-between gap-2 w-full">
      <div className="w-full xl:w-8/12 overflow-x-auto">
        <Tabs
          accentColor="primary"
          tabType="boxed"
          tabList={[
            {
              title: "Dashboard",
              onClick: () => {
                setCurrentComponent("dashboard");
              },
              icon: "dashboard",
              active: currentComponent === "dashboard",
            },
            {
              title: "Tasks",
              onClick: () => {
                setCurrentComponent("tasks");
              },
              icon: "tasks",
              active: currentComponent === "tasks",
            },
            {
              title: "Document",
              onClick: () => {
                setCurrentComponent("document");
              },
              icon: "document-2",
              active: currentComponent === "document",
            },
          ]}
        />
      </div>
      <div className="flex justify-end gap-5">
        <Button
          className="btn-md h-46"
          leftIcon="instant-upload"
          onClick={handleOpenDialogue}
          innerTextClassname="hidden md:flex"
          variant="primaryBordered"
        >
          Instant Upload
        </Button>
        <Button
          leftIcon="add-circle"
          variant="primary"
          className="btn-md h-46"
          innerTextClassname="font-bold hidden md:flex text-light-common-white"
        >
          New
        </Button>
      </div>
      <InstantUploadModal
        isModalOpen={isDialogueOpen}
        modalId={dialogueId}
        onDismiss={handleCloseDialogue}
      />
    </section>
  );
};

export default DocumentPageHeader;
