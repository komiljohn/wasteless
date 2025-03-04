import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

import { Button } from "@/components/ui/button";

import cls from "./banner.module.css";
import BottleAnimation from "@/components/animation/BottleAnimation";
import OpacityWhenVisible from "@/components/animation/OpacityWhenVisible";

export default function Banner() {
  const t = useTranslations();

  return (
    <div className={`${cls.Hero} container  mx-auto relative`}>
      <div className="mt-20 max-w-[694px]  max-sm:mt-[26px]">
        <FadeInWhenVisible delay={0.2}>
          <h1 className="text-[80px] leading-[84px] mb-9 font-days-one text-primary max-xl:text-[60px] max-xl:leading-[64px] max-sm:text-[26px] max-sm:leading-[29px] max-sm:mb-4">
            {t("weRecycleToSavePlanet")}
          </h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <p className="mb-9 text-[22px] text-primary max-w-[460px] max-sm:mb-8 max-sm:text-base">
            <span className="font-bold">Wasteless </span>
            {t("description")}
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.4}>
          <Button className="flex gap-6 py-6 !px-[44px] rounded-full text-2xl font-days-one max-sm:py-3.5 max-sm:h-12 max-sm:text-base">
            {t("contactWithUs")}
            <MoveRight />
          </Button>
        </FadeInWhenVisible>
      </div>
      <OpacityWhenVisible delay={0.4}>
        <div className={`${cls.Hero__animation} `}>
          <div className={cls.Hero__animation__line}></div>
          <div className={cls.Hero__animation__line}></div>
          <div className={cls.Hero__animation__line}></div>
          <div className={cls.Hero__animation__line}></div>
          <div className={cls.Hero__animation__line}></div>
          <div className={cls.Hero__animation__line}></div>
          <div className={cls.Hero__animation__line}></div>
          <div className={cls.Hero__animation__round}></div>
          <div className={cls.Hero__animation__img}>
            <BottleAnimation delay={0.9}>
              <Image
                className={`${cls.Hero__animation__img1} hero__img `}
                width={480}
                height={480}
                src={"/images/bottle.png"}
                alt={"image"}
              />
            </BottleAnimation>
          </div>
        </div>
      </OpacityWhenVisible>
    </div>
  );
}
