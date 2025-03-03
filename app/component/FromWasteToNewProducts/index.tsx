import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import OpacityWhenVisible from "@/components/animation/OpacityWhenVisible";

import FallDownEffect from "./FallDownEffect";

export default function FromWasteToNewProducts() {
  const t = useTranslations();

  return (
    <div className="pt-[91px] max-xl:pt-15 max-sm:pt-[30px] pb-[102px] max-sm:pb-[57px] container mx-auto px-4">
      <div className="max-sm:w-[361px] mx-auto">
        <FadeInWhenVisible className="text-[90px] max-xl:text-[60px] max-sm:text-xl leading-[115px] max-xl:leading-[80px] max-sm:leading-[25px] text-white !font-days-one pl-6 max-xl:pl-0 font-outline-2 max-sm:font-outlin">
          {t("fromWaste")}
        </FadeInWhenVisible>
        <FadeInWhenVisible
          delay={0.1}
          className="text-end text-[90px] max-xl:text-[60px] max-sm:text-xl leading-[115px] max-xl:leading-[90px] max-sm:leading-[25px] font-days-one text-primary pr-6 max-xl:pr-0 mb-[160px] max-xl:-mt-5 max-sm:mt-0 max-lg:mb-[60px] max-sm:mb-5 max-xl:mb-[120px]"
        >
          {t("toNewProducts")}
        </FadeInWhenVisible>
      </div>
      <div className="relative">
        <OpacityWhenVisible
          delay={0.2}
          className="absolute l-[200px] w-[1008px] max-xl:w-[900px] max-xl:h-[650px] h-[756px] left-1/2 -translate-x-1/2 -bottom-[240px] max-xl:-bottom-[160px] max-lg:hidden z-10"
        >
          <Image
            fill
            sizes="auto"
            priority
            src="/images/trash-box.png"
            alt="trash box"
          />
        </OpacityWhenVisible>
        <div className="flex justify-between mb-[183px] max-lg:mb-[90px] max-sm:mb-12 max-lg:flex-col max-lg:gap-5 max-lg:items-center">
          <FallDownEffect
            delay={0.7}
            y={400}
            className="absolute -top-[410px] max-xl:-top-[306px] left-1/2 max-xl:left-[45%] -translate-x-1/2 max-lg:hidden w-[133px] h-[133px] max-xl:w-[100px] max-xl:h-[100px]"
          >
            <Image
              fill
              sizes="auto"
              src="/images/bottle-1.png"
              alt="bottle 1"
            />
          </FallDownEffect>
          <FallDownEffect
            delay={1}
            y={300}
            className="absolute -top-[300px] max-xl:-top-[200px] left-[49.5%] max-xl:left-[48%] w-[180px] h-[180px] max-xl:w-[130px] max-xl:h-[130px] max-lg:hidden"
          >
            <Image
              fill
              sizes="auto"
              src="/images/bottle-2.png"
              alt="bottle 2"
            />
          </FallDownEffect>
          <FallDownEffect
            delay={0.9}
            y={300}
            className="absolute -top-[200px] max-xl:-top-[120px] left-[37%] max-xl:left-[35%] w-[196px] h-[196px] max-xl:w-[125px] max-xl:h-[125px] max-lg:hidden"
          >
            <Image
              fill
              sizes="auto"
              src="/images/bottle-3.png"
              alt="bottle 3"
            />
          </FallDownEffect>
          <div className="max-w-[452px] max-xl:max-w-[380px] max-lg:mx-auto">
            <FadeInWhenVisible
              delay={0.2}
              className="font-semibold text-white px-[33px] py-[30px] text-[22px] leading-[26px] max-xl:px-[24px] max-xl:text-xl max-xl:leading-[24px] bg-primary rounded-[40px] rounded-br-none mb-[77px] max-lg:mb-5 max-sm:py-[30px] max-sm:px-2 max-sm:text-base max-sm:leading-[20px] max-lg:rounded-br-[40px] max-lg:rounded-bl-none"
            >
              {t("fromWasteToNewProductsText1")}
            </FadeInWhenVisible>
            <FadeInWhenVisible
              delay={0.3}
              className="font-semibold px-[33px] py-[30px] bg-white text-primary text-[22px] leading-[26px] max-xl:px-[24px] max-xl:text-xl max-xl:leading-[24px] rounded-[40px] rounded-br-none ml-12 border border-primary max-sm:py-[30px] max-sm:px-2 max-sm:text-base max-sm:leading-[20px]"
            >
              {t("fromWasteToNewProductsText2")}
            </FadeInWhenVisible>
          </div>
          <FadeInWhenVisible
            delay={0.2}
            className="h-fit font-semibold px-[33px] bg-primary text-white rounded-[40px] rounded-bl-none py-[30px] text-[22px] leading-[26px] max-xl:px-[24px] max-xl:text-xl max-xl:leading-[24px] max-w-[452px] max-xl:max-w-[380px] max-sm:py-[30px] max-sm:px-2 max-sm:text-base max-sm:leading-[20px]"
          >
            {t("fromWasteToNewProductsText3")}
          </FadeInWhenVisible>
        </div>
      </div>
      <div>
        <p className="mb-2.5 max-sm:mb-[26px] text-[32px] max-sm:text-xl leading-[40px] max-sm:leading-[25px] text-primary text-center font-days-one">
          {t("whatWasteRecycledInto")}
        </p>
        <div className="relative w-[951px] h-[91px] max-xl:w-[750px] mx-auto max-lg:w-[600px] max-md:hidden">
          <Image fill sizes="auto" src="/images/lines.png" alt="lines" />
        </div>
        <div className="grid grid-cols-6 max-md:grid-cols-3 max-sm:grid-cols-2 justify-between mt-[18px] gap-12 w-fit mx-auto max-xl:gap-4 max-md:flex-wrap max-md:gap-[26px]">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="grow">
              <Image
                src={`/images/product-${idx + 1}.png`}
                width={150}
                height={150}
                alt="lines"
                className="border-primary"
              />
              <p className="mt-[18px] max-w-[150px] text-center font-medium max-sm:text-sm">
                {t(`product${idx + 1}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
