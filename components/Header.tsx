import React from "react";
import TextInput from "./Inputs/TextInput";
import logo1 from "@/assets/svgs/logoHeader1.svg";
import logo2 from "@/assets/svgs/logoHeader2.svg";
import logo3 from "@/assets/svgs/logoHeader3.svg";
import logo4 from "@/assets/svgs/logoHeader4.svg";
import Image from "next/image";
import Button from "./Button";
import { VariantTypes } from "./Button/variants";
import NotificationComponent from "./NotificationComponent";
import UserProfile from "./UserProfile";

const topCompLogos = [logo1, logo2, logo3, logo4];
const headerBtns: { title: string; variant: VariantTypes }[] = [
  {
    title: "Melding maken",
    variant: "purple",
  },
  {
    title: "VIM",
    variant: "primary",
  },
  {
    title: "DataLek",
    variant: "primary",
  },
];

const Header = () => {
  return (
    <section className="header-wrapper flex items-center sticky top-0 z-50 ">
      <div className="mx-auto container px-5 lg:px-[50px] flex gap-3 lg:gap-5 xl:gap-7 2xl:gap-[75px] items-center">
        <div className="w-max">
          <TextInput
            type="text"
            leftIcon="search"
            className="h-46 w-[240px]"
            placeholder="Search anything here"
          />
        </div>
        <div className="hidden xl:flex gap-[10px]">
          {topCompLogos?.map((item, index) => (
            <div
              key={index}
              className="p-2 border border-light-primary-100 flex items-center rounded-lg h-[40px] w-[40px] xl:h-46 xl:w-46"
            >
              <Image src={item} width={30} height={26} alt="company logo" />
            </div>
          ))}
        </div>
        <section className="flex flex-1 items-center justify-end xl:justify-between">
          <div className="hidden xl:flex items-center gap-1 2xl:gap-[10px]">
            {headerBtns?.map((item, index) => (
              <Button
                innerTextClassname="font-bold text-xs 2xl:text-base text-light-common-white"
                key={index}
                variant={item?.variant}
                className="lg:w-max lg:px-3 2xl:px-4"
              >
                {item?.title}
              </Button>
            ))}
          </div>
          <div className="flex gap-1 2xl:gap-[10px]">
            <NotificationComponent />

            <UserProfile />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Header;
