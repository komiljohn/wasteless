import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import OpacityWhenVisible from "@/components/animation/OpacityWhenVisible";
import { Ripple } from "@/components/magic-ui/RippleBackground";
import { Button } from "@/components/ui/button";

export default function Banner() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 flex relative">
      <div className="mt-20 max-w-[694px] max-sm:mt-[26px]">
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
      <OpacityWhenVisible delay={0.3}>
        <div className="absolute -right-[120px] flex h-[848px] w-[848px] max-xl:h-[648px] max-xl:w-[648px] flex-col items-center justify-center overflow-hidden z-10 max-lg:hidden max-xl:top-8">
          <div className="size-[460px] rounded-[175px] max-xl:rounded-[99px] absolute top-[139px] right-[249px] max-xl:-top-[37px] max-xl:right-[225px] overflow-hidden">
            <div className="absolute size-[350px] max-xl:size-[198px] rounded-full -bottom-0 right-0 bg-[#79B669]"></div>
            <div className="animate-bottle-drop pl-[100px] absolute bottom-[15px] right-[15px] max-xl:right-[15px] max-h-[452px] w-[452px] h-[452px] max-xl:w-[280px] max-xl:h-[280px] -mr-12 -mb-5">
              <Image
                priority
                fill
                sizes="auto"
                src="/images/bottle.png"
                alt="wasted bottle"
              />
            </div>
          </div>
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white overflow-hidden bg-primary"></p>
          <Ripple />
        </div>
      </OpacityWhenVisible>
    </div>
  );
}
