import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

export default function FromWasteToNewProducts() {
  const t = useTranslations();

  return (
    <div className="pt-[91px] max-sm:pt-[30px] pb-[102px] max-sm:pb-[57px] container mx-auto px-4">
      <div className="max-sm:w-[261px] mx-auto">
        <p className="text-[90px] max-lg:text-[70px] max-sm:text-xl leading-[115px] max-lg:leading-[90px] max-sm:leading-[25px] text-white font-days-one pl-6 font-outline-2 max-sm:font-outline">
          {t("fromWaste")}
        </p>
        <p className="text-end text-[90px] max-lg:text-[70px] max-sm:text-xl leading-[115px] max-lg:leading-[90px] max-sm:leading-[25px] font-days-one text-primary pr-6 mb-[160px] max-lg:mb-[120px] max-sm:mb-5">
          {t("toNewProducts")}
        </p>
      </div>
      <div className="relative">
        <div className="absolute l-[200px] w-[1008px] max-xl:w-[900px] max-xl:h-[650px] h-[756px] left-1/2 -translate-x-1/2 -bottom-[190px] max-xl:-bottom-[120px] max-lg:hidden">
          <Image
            fill
            src="/images/trash-box.png"
            alt="trash box"
            className=""
          />
        </div>
        <div className="flex justify-between mb-[183px] max-lg:mb-[90px] max-sm:mb-12 max-lg:flex-col max-lg:gap-5 max-lg:items-center">
          <div className="max-w-[452px] max-xl:max-w-[380px] max-lg:mx-auto">
            <p className="font-semibold text-white px-[33px] py-[30px] text-[22px] leading-[26px] max-xl:px-[24px] max-xl:text-xl max-xl:leading-[24px] bg-primary rounded-[40px] rounded-br-none mb-[77px] max-lg:mb-5 max-sm:py-[30px] max-sm:px-2 max-sm:text-base max-sm:leading-[20px] max-lg:rounded-br-[40px] max-lg:rounded-bl-none">
              {t("fromWasteToNewProductsText1")}
            </p>
            <p className="font-semibold px-[33px] py-[30px] bg-white text-primary text-[22px] leading-[26px] max-xl:px-[24px] max-xl:text-xl max-xl:leading-[24px] rounded-[40px] rounded-br-none ml-12 border border-primary max-sm:py-[30px] max-sm:px-2 max-sm:text-base max-sm:leading-[20px]">
              {t("fromWasteToNewProductsText2")}
            </p>
          </div>
          <p className="h-fit font-semibold px-[33px] bg-primary text-white rounded-[40px] rounded-bl-none py-[30px] text-[22px] leading-[26px] max-xl:px-[24px] max-xl:text-xl max-xl:leading-[24px] max-w-[452px] max-xl:max-w-[380px] max-sm:py-[30px] max-sm:px-2 max-sm:text-base max-sm:leading-[20px]">
            {t("fromWasteToNewProductsText3")}
          </p>
        </div>
      </div>
      <div>
        <p className="mb-2.5 max-sm:mb-[26px] text-[32px] max-sm:text-xl leading-[40px] max-sm:leading-[25px] text-primary text-center font-days-one">
          {t("whatWasteRecycledInto")}
        </p>
        <div className="relative w-[951px] h-[91px] max-xl:w-[750px] mx-auto max-lg:w-[600px] max-md:hidden">
          <Image fill src="/images/lines.png" alt="lines" />
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
