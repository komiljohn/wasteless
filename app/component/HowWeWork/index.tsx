import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";

import WorkItem from "./WorkItem";

export default function HowWeWork() {
  const t = useTranslations();
  const [activeTabId, setActiveTabId] = useState(1);

  return (
    <section className="bg-primary pt-[50px] max-sm:pt-[30px] pb-[160px] max-lg:pb-[38px] mb-[90px] max-sm:mb-[30px] relative">
      <div className="container mx-auto px-4">
        <p className="font-days-one text-[40px] leading-[51px] text-white mb-6 relative w-fit mx-auto max-sm:text-xl max-sm:leading-[25px] max-lg:mb-4">
          <Image
            src="/images/recycle-transparent.png"
            width={140}
            height={140}
            alt="recycle"
            className="absolute -top-[40px] -right-[95px] z-[0] max-sm:hidden"
          />
          <span className="relative z-10">{t("howWeWork")}</span>
        </p>
        <div className="flex gap-5 justify-center max-lg:flex-col max-lg:items-center max-lg:gap-3.5">
          <Button
            onClick={() => setActiveTabId(1)}
            className={twMerge(
              "w-[420px] h-[50px] text-2xl max-lg:text-base leading-[31px] max-lg:leading-[20px] font-days-one rounded-[20px] max-lg:rounded-[10px] max-lg:h-10 max-lg:w-[263px]",
              activeTabId === 1
                ? "bg-white text-primary hover:bg-white"
                : "bg-transparent border border-white text-white",
            )}
          >
            {t("order")}
          </Button>
          <Button
            onClick={() => setActiveTabId(2)}
            className={twMerge(
              "w-[420px] h-[50px] text-2xl max-lg:text-base leading-[31px] max-lg:leading-[20px] font-days-one rounded-[20px] max-lg:rounded-[10px] max-lg:h-10 max-lg:w-[263px]",
              activeTabId === 2
                ? "bg-white text-primary hover:bg-white"
                : "bg-transparent border border-white text-white",
            )}
          >
            {t("selfDeliver")}
          </Button>
        </div>
        <div className="pt-[95px] max-lg:pt-[38px] flex justify-between flex-wrap gap-[50px] gap-y-[100px] max-w-[1115px] max-xl:max-w-[830px] mx-auto max-lg:max-w-fit max-lg:flex-col max-lg:gap-[61px]">
          {workItems
            .filter((i) => i.tabId === activeTabId)
            .map((i, index, arr) => (
              <WorkItem
                key={i.id}
                isLast={arr.length === index + 1}
                order={index + 1}
                text={i.text}
                image={i.image}
              />
            ))}
        </div>
      </div>
      <Image
        src="/images/recycle-transparent.png"
        width={400}
        height={400}
        alt="recycle"
        className="absolute top-[200px] -left-[105px] max-sm:hidden"
      />
    </section>
  );
}

const workItems = [
  {
    id: 1,
    text: "Siz plastik chiqindilarni saralaysiz",
    image: "/images/bin.png",
    tabId: 1,
  },
  {
    id: 2,
    text: "Arizani ilova orqali yuborasiz",
    image: "/images/phones.png",
    tabId: 1,
  },
  {
    id: 3,
    text: "Belgilangan vaqtda kuryer yetib keladi",
    image: "/images/deliver-man.png",
    tabId: 1,
  },
  {
    id: 4,
    text: "Kuryer chiqindilarni qayta ishlash uchun olib ketadi va arizani yopadi",
    image: "/images/check.png",
    tabId: 1,
  },
  {
    id: 5,
    text: "Plastik chiqindilarni saralaysiz",
    image: "/images/bin.png",
    tabId: 2,
  },
  {
    id: 6,
    text: "Ilova orqali qabul qilish punktini topasiz",
    image: "/images/location.png",
    tabId: 2,
  },
  {
    id: 7,
    text: "Chiqindilarni punktga olib kelib, qayta ishlash uchun topshirasiz",
    image: "/images/recycle.png",
    tabId: 2,
  },
  {
    id: 8,
    text: "Siz qo‘shimcha daromad olasiz, chiqindilar esa yangi hayotga ega bo‘ladi!",
    image: "/images/money.png",
    tabId: 2,
  },
];
