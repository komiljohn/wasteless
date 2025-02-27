import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

export default function AboutOurActivities() {
  const t = useTranslations();

  return (
    <div className="bg-[url(/images/about-activities-bg.png)] bg-prmary bg-cover bg-no-repeat py-[52px] pb-[82px] text-center">
      <p className="text-[40px] leading-[51px] text-white font-days-one mb-4">
        {t("aboutActivities")}
      </p>
      <p className="text-[22px] leading-[27px] text-white font-medium mb-[35px]">
        {t("downloadPresentationGetFamiliar")}
      </p>
      <Link
        target="_blank"
        href="/files/AboutUs.pdf"
        className="inline-block text-[20px] leading-[24px] font-medium text-primary p-6 font-days-one rounded-[20px] bg-white"
      >
        {t("downloadPresentation")}
      </Link>
    </div>
  );
}
