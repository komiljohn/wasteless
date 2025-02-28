import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Ripple } from "@/components/magic-ui/RippleBackground";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <div className="container mx-auto px-4 flex relative">
      <div className="mt-20 max-w-[694px] max-sm:mt-[26px]">
        <h1 className="text-[80px] leading-[84px] mb-9 font-days-one text-primary max-xl:text-[60px] max-xl:leading-[64px] max-sm:text-[26px] max-sm:leading-[29px] max-sm:mb-4">
          Tabiatni asrash uchun biz qayta ishlaymiz
        </h1>
        <p className="mb-9 text-[22px] text-primary max-w-[460px] max-sm:mb-8 max-sm:text-base">
          <span className="font-bold">Wasteless </span>
          qayta ishlanadigan chiqindilarni topshirishi kerak bo‘lgan
          kompaniyalarni qayta ishlovchi kompaniyalar bilan bog‘laydi.
        </p>
        <Button className="flex gap-6 py-6 !px-[44px] rounded-full text-2xl font-days-one max-sm:py-3.5 max-sm:h-12 max-sm:text-base">
          Biz bilan bog'lanish
          <MoveRight />
        </Button>
      </div>
      <div className="absolute -right-[120px] flex h-[848px] w-[848px] max-xl:h-[648px] max-xl:w-[648px] flex-col items-center justify-center overflow-hidden z-10 max-lg:hidden">
        <div className="w-[532px] h-[532px] overflow-hidden relative">
          <Image
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/bottle.png"
            alt="wasted bottle"
            className="absolute top-[135px] right-[221px] max-h-[492px]"
          />
        </div>
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white overflow-hidden bg-primary"></p>
        <Ripple mainCircleSize={400} />
      </div>
    </div>
  );
}
