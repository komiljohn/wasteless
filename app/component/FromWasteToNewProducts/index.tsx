import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

export default function FromWasteToNewProducts() {
  const t = useTranslations();

  return (
    <div className="pt-[91px] pb-[102px] container mx-auto px-4">
      <p className="text-[90px] leading-[115px] text-white font-days-one pl-6 font-outline-2">
        {t("fromWaste")}
      </p>
      <p className="text-end text-[90px] leading-[115px] font-days-one text-primary pr-6 mb-[160px] ">
        {t("toNewProducts")}
      </p>
      <div className="relative l-[200px]">
        <Image
          src="/images/trash-box.png"
          width={1008}
          height={756}
          alt="trash box"
          className="absolute left-1/2 -translate-x-1/2 -top-[110px]"
        />
      </div>
      <div className="flex justify-between mb-[183px]">
        <div className="max-w-[452px]">
          <p className="font-semibold text-white px-[33px] py-[30px] text-[22px] leading-[26px] bg-primary rounded-[40px] rounded-br-none mb-[77px]">
            {t("fromWasteToNewProductsText1")}
          </p>
          <p className="font-semibold px-[33px] py-[30px] bg-white text-primary text-[22px] leading-[26px] rounded-[40px] rounded-br-none ml-12 border border-primary">
            {t("fromWasteToNewProductsText2")}
          </p>
        </div>
        <p className="h-fit font-semibold px-[33px] bg-primary text-white rounded-[40px] rounded-bl-none py-[30px] text-[22px] leading-[26px] max-w-[452px]">
          {t("fromWasteToNewProductsText3")}
        </p>
      </div>
      <div>
        <p className="mb-2.5 text-[32px] leading-[40px] text-primary text-center font-days-one">
          {t("whatWasteRecycledInto")}
        </p>
        <Image
          src="/images/lines.png"
          width={951}
          height={91}
          alt="lines"
          className="mx-auto"
        />
        <div className="flex justify-between mt-[18px] gap-12 w-fit mx-auto">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx}>
              <Image
                src={`/images/product-${idx + 1}.png`}
                width={150}
                height={150}
                alt="lines"
                className="rounded-[20px] border-primary"
              />
              <p className="mt-[18px] max-w-[150px] text-center font-medium">
                {t(`product${idx + 1}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
