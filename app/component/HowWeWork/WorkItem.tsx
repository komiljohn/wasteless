import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";

import DotsIcon from "/public/icons/dots.svg";

import { Dots } from "./Dot";

interface Props {
  order: number;
  text: string;
  image: string;
  isLast: boolean;
}

export default function WorkItem({ order, text, image, isLast }: Props) {
  const isEven = order % 2 === 0;

  const t = useTranslations();

  return (
    <>
      <div
        className={twMerge(
          "relative border rounded-full py-6 px-[56px] max-lg:p-[11px] bg-[#5FAB54] w-[500px] max-xl:w-[350px] max-sm:w-full h-fit max-lg:translate-y-0 max-xl:py-3 max-xl:px-11",
          isEven ? "translate-y-[70%]" : "",
        )}
      >
        <div className="absolute border-[3px] border-white rounded-full bg-primary size-[50px] text-[30px] leading-[38px] font-days-one text-white flex justify-center items-center top-1/2 -translate-y-1/2 -left-3 max-lg:hidden">
          {order}
        </div>
        <p className="text-white font-days-one text-xl max-lg:text-base max-xl:text-base max-xl:leading-[20px] leading-[25px] w-[68%] max-lg:w-full max-lg:text-center">
          {t(text)}
        </p>
        <Image
          src={image}
          width={215}
          height={215}
          alt="work item"
          className="absolute w-auto h-auto -bottom-5 -right-[10px] max-lg:hidden max-xl:-right-7"
        />
        {!isLast && (
          <Dots
            className={twMerge(
              "max-lg:hidden",
              isEven ? "-left-[32px] max-xl:-left-[50px]" : "-right-7",
            )}
            amount={6}
            direction={isEven ? "right" : "left"}
          />
        )}
        {!isLast && (
          <DotsIcon className="absolute left-1/2 -translate-x-1/2 -bottom-[54px] lg:hidden" />
        )}
      </div>
    </>
  );
}
