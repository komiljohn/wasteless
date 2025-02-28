import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

export default function AboutUs() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 flex justify-between items-center mt-[220px] pb-[71px] max-lg:flex-col max-lg:gap-10 max-md:mt-20">
      <div className="relative">
        <div className="relative w-[603px] h-[590px] max-xl:w-[450px] max-xl:h-[460px] max-sm:w-[343px] max-sm:h-[335px]">
          <Image
            fill
            src="/images/round-map-bg.png"
            alt="phone"
            className="max-h-[590px]"
          />
        </div>
        <div className="absolute w-[315px] h-[644px] max-xl:w-[230px] max-xl:h-[480px] top-0 left-[158px] max-xl:left-[120px] max-xl:-top-5 max-sm:w-[180px] max-sm:h-[366px] max-sm:left-[82px]">
          <Image fill src="/images/phone.png" alt="phone" />
        </div>
      </div>
      <div className="max-w-[630px] max-xl:max-w-[520px]">
        <p className="text-2xl max-xl:text-xl mb-4">
          <span className="font-days-one text-primary">Wasteless — </span>
          <span>{t("aboutUsText")}</span>
        </p>
        <p></p>
        <ul className="text-2xl max-xl:text-xl max-sm:text-lg">
          <li>{t("aboutUs1")}</li>
          <li>{t("aboutUs2")}</li>
          <li>{t("aboutUs3")}</li>
          <li>{t("aboutUs4")}</li>
        </ul>
        <p className="font-days-one text-primary mt-4 mb-6 max-sm:mb-4 text-[22px] leading-[31px] text-center max-xl:text-xl max-xl:leading-[25px] max-sm:text-lg">
          {t("ourMission")}
        </p>
        <div className="flex gap-5 max-sm:gap-3.5 max-sm:flex-col">
          <div className="h-fit w-1/2 max-sm:w-full px-[46px] max-sm:px-5 py-[22px] max-sm:py-2 rounded-[10px] border-primary/40 border text-center">
            <p className="font-days-one mb-3 text-primary text-[26px] max-xl:text-xl leading-[31px] max-xl:leading-[25px]">
              {t("years", { year: 3 })}
            </p>
            <p className="text-xl">{t("inRecyclingMarket", { num: 3 })}</p>
          </div>
          <div className="h-fit w-1/2 max-sm:w-full px-[46px] max-sm:px-5 py-[22px] max-sm:py-2 rounded-[10px] border-primary/40 border text-center">
            <p className="font-days-one mb-3 max-sm:mb-1.5 text-primary text-[26px] max-xl:text-xl leading-[31px] max-xl:leading-[25px]">
              {t("tonn", { amount: "12 200" })}
            </p>
            <p className="text-xl max-sm:text-lg">
              {t("recycledPlasticBottles", { year: 3 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
