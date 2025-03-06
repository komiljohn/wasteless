import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

export default function AboutOurActivities() {
  const t = useTranslations();

  return (
    <section
      id="activities"
      className="bg-[url(/images/about-activities-bg.png)] backdrop-opacity-25 bg-center bg-cover bg-no-repeat pt-[54px] max-sm:pt-[46px] pb-[84px] max-sm:pb-12 text-center relative"
    >
      <div className="bg-gradient absolute top-0 left-0 h-full w-full" />
      <div className="relative">
        <p className="text-[40px] leading-[51px] max-sm:text-xl max-sm:leading-[25px] max-sm:mb-2.5 text-white font-days-one mb-4">
          {t("aboutActivities")}
        </p>
        <p className="text-[22px] leading-[27px] max-sm:text-[15px] max-sm:leading-[18px] max-sm:mb-[18px] text-white font-medium mb-[35px] max-sm:w-4/5 max-sm:mx-auto">
          {t("downloadPresentationGetFamiliar")}
        </p>
        <Link
          target="_blank"
          href="/files/AboutUs.pdf"
          className="inline-block h-[81px] text-[20px] max-sm:text-base max-sm:h-12 leading-[24px] max-sm:leading-[20px] font-medium text-primary px-6 py-7 max-sm:py-3.5 max-sm:px-[35px] font-days-one rounded-[20px] bg-white"
        >
          {t("downloadPresentation")}
        </Link>
      </div>
    </section>
  );
}
