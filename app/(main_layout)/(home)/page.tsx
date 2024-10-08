import React from "react";
import DocumentPageHeader from "./components/DocumentPageHeader";
import PageTitleWithBackBtn from "@/components/PageTitleWithBackBtn";
import NewDocumentForm from "./components/NewDocumentForm";
import getPageTitle from "@/utils/getPageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: getPageTitle("Document Management"),
};

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
