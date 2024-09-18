import React, { ReactNode } from "react";
import DocumentPageHeader from "./components/DocumentPageHeader";
import PageTitleWithBackBtn from "@/components/PageTitleWithBackBtn";
import NewDocumentForm from "./components/NewDocumentForm";

const DocumentManagementPage = () => {
  return (
    <div className="w-full max-w-page">
      <DocumentPageHeader />
      <PageTitleWithBackBtn title="New Document" />

      <NewDocumentForm />
    </div>
  );
};

export default DocumentManagementPage;
