import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import OpacityWhenVisible from "@/components/animation/OpacityWhenVisible";

export default function AboutUs() {
  const t = useTranslations();

  return (
    <section
      id="project"
      className="container mx-auto px-4 flex justify-between items-center mt-[180px] pt-10 max-xl:mt-6 max-xl:pt-4 pb-[71px] max-lg:flex-col max-lg:gap-10 max-md:mt-20"
    >
      <OpacityWhenVisible delay={0.3}>
        <div className="relative">
          <div className="relative w-[603px] h-[590px] max-xl:w-[450px] max-xl:h-[460px] max-sm:w-[343px] max-sm:h-[335px]">
            <Image
              fill
              sizes="auto"
              src="/images/round-map-bg.png"
              priority
              alt="phone"
              className="max-h-[590px]"
            />
          </div>
          <div className="absolute w-[315px] h-[644px] max-xl:w-[230px] max-xl:h-[480px] top-0 left-[158px] max-xl:left-[120px] max-xl:-top-5 max-sm:w-[180px] max-sm:h-[366px] max-sm:left-[82px]">
            <Image fill sizes="auto" src="/images/phone.png" alt="phone" />
          </div>
        </div>
      </OpacityWhenVisible>
      <div className="max-w-[630px] max-xl:max-w-[520px]">
        <FadeInWhenVisible delay={0.4}>
          <p className="text-2xl max-xl:text-xl max-sm:text-lg mb-6">
            <span className="font-days-one text-primary">Wasteless — </span>
            <span>{t("aboutUsText")}</span>
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.5}>
          <p className="text-2xl max-xl:text-xl max-sm:text-lg mb-1">
            {t("whatWeDo")}
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.5}>
          <ul className="text-2xl max-xl:text-xl max-sm:text-lg list-disc pl-7">
            <li>{t("aboutUs1")}</li>
            <li>{t("aboutUs2")}</li>
            <li>{t("aboutUs3")}</li>
            <li>{t("aboutUs4")}</li>
          </ul>
        </FadeInWhenVisible>
        <FadeInWhenVisible
          delay={0.5}
          className="font-days-one text-primary mt-4 mb-6 max-sm:mb-4 text-[22px] leading-[31px] text-center max-xl:text-xl max-xl:leading-[25px] max-sm:text-lg"
        >
          {t("ourMission")}
        </FadeInWhenVisible>
        <div className="flex gap-5 max-sm:gap-3.5 max-sm:flex-col">
          <OpacityWhenVisible
            delay={0.6}
            className="h-fit w-1/2 max-sm:w-full px-[46px] max-sm:px-5 py-[22px] max-sm:py-2 rounded-[10px] border-primary/40 border text-center"
          >
            <p className="font-days-one mb-3 text-primary text-[26px] max-xl:text-xl leading-[31px] max-xl:leading-[25px]">
              {t("years", { year: 3 })}
            </p>
            <p className="text-xl">{t("inRecyclingMarket", { num: 3 })}</p>
          </OpacityWhenVisible>
          <OpacityWhenVisible
            delay={0.6}
            className="h-fit w-1/2 max-sm:w-full px-[46px] max-sm:px-5 py-[22px] max-sm:py-2 rounded-[10px] border-primary/40 border text-center"
          >
            <p className="font-days-one mb-3 max-sm:mb-1.5 text-primary text-[26px] max-xl:text-xl leading-[31px] max-xl:leading-[25px]">
              {t("tonn", { amount: "12 200" })}
            </p>
            <p className="text-xl max-sm:text-lg">
              {t("recycledPlasticBottles", { year: 3 })}
            </p>
          </OpacityWhenVisible>
        </div>
      </div>
    </section>
  );
}
