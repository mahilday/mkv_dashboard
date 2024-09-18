import { iconNames } from "@/assets/icons";
import IconComponent from "@/components/Icons/Icon";
import getPageTitle from "@/utils/getPageTitle";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: getPageTitle("Components Library"),
};

const ComponentsLibraryPage: FC = () => {
  return (
    <section className="w-full p-3 sm:p-8">
      {/* Icons */}
      <div className="mb-16 max-w-page w-full">
        <div className="mb-8 flex items-center justify-between">
          <p>Icons</p>
        </div>
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-10">
            {iconNames
              .sort((a, b) => a.localeCompare(b))
              .map((iconName) => (
                <div
                  className="text-center flex flex-col items-center"
                  key={iconName}
                >
                  <IconComponent name={iconName} size={48} />
                  {iconName}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsLibraryPage;
