import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

export default function AboutUs() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 flex justify-between items-center mt-[220px]">
      <div className="relative">
        <Image
          width={603}
          height={590}
          src="/images/round-map-bg.png"
          alt="phone"
          className="max-h-[590px]"
        />
        <Image
          className="absolute -bottom-1 left-[158px]"
          width={315}
          height={644}
          src="/images/phone.png"
          alt="phone"
        />
      </div>
      <div className="max-w-[630px]">
        <p className="text-2xl mb-4">
          <span className="font-days-one text-primary">Wasteless — </span>
          <span>{t("aboutUsText")}</span>
        </p>
        <p></p>
        <ul className="text-2xl">
          <li>{t("aboutUs1")}</li>
          <li>{t("aboutUs2")}</li>
          <li>{t("aboutUs3")}</li>
          <li>{t("aboutUs4")}</li>
        </ul>
        <p className="font-days-one text-primary mt-4 mb-6 text-[22px] leading-[31px] text-center">
          {t("ourMission")}
        </p>
        <div className="flex gap-5">
          <div className="h-fit w-1/2 px-[46px] py-[22px] rounded-[10px] border-primary/40 border text-center">
            <p className="font-days-one mb-3 text-primary text-[26px] leading-[31px]">
              {t("years", { year: 3 })}
            </p>
            <p className="text-xl">{t("inRecyclingMarket", { num: 3 })}</p>
          </div>
          <div className="h-fit w-1/2 px-[46px] py-[22px] rounded-[10px] border-primary/40 border text-center">
            <p className="font-days-one mb-3 text-primary text-[26px] leading-[31px]">
              {t("tonn", { amount: "12 200" })}
            </p>
            <p className="text-xl">
              {t("recycledPlasticBottles", { year: 3 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
