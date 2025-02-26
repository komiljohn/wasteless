import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Ripple } from "@/components/magic-ui/RippleBackground";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <div className="container mx-auto px-4 flex max-xl:">
      <div className="mt-20 max-w-[694px]">
        <h1 className="text-[80px] leading-[84px] mb-9 font-days-one text-primary">
          Tabiatni asrash uchun biz qayta ishlaymiz
        </h1>
        <p className="mb-9 text-[22px] text-primary max-w-[460px]">
          <span className="font-bold">Wasteless </span>
          qayta ishlanadigan chiqindilarni topshirishi kerak bo‘lgan
          kompaniyalarni qayta ishlovchi kompaniyalar bilan bog‘laydi.
        </p>
        <Button className="flex gap-6 py-6 !px-[44px] rounded-full text-2xl font-days-one">
          Biz bilan bog'lanish
          <MoveRight />
        </Button>
      </div>
      <div className="absolute flex h-[848px] w-[848px] flex-col items-center justify-center overflow-hidden right-0 z-10">
        <div className="w-[532px] h-[532px] overflow-hidden">
          <Image
            width={492}
            height={492}
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
