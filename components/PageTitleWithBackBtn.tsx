import React from "react";
import BackButton from "./BackButton";

const PageTitleWithBackBtn = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2 lg:gap-30">
      <BackButton withTitle />
      <h1 className="text-light-gray dark:text-dark-common-light">{title}</h1>
    </div>
  );
};

export default PageTitleWithBackBtn;
