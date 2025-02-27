import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

export default function Download() {
  const t = useTranslations();

  return (
    <section className="container mx-auto px-4 pb-[91px]">
      <div className="px-[52px] pt-[52px] pb-[61px] bg-linear-[276.26deg,#79B669_-3%,#4A9C35_25.86%,#1F8505_98.69%] rounded-[20px]">
        <div>
          <p className="mb-5 text-[32px] leading-[37px] font-days-one max-w-[55%] text-white">
            {t("chooseUs")}
          </p>
          <p className="text-lg leading-[25px] text-white mb-9 max-w-1/2">
            {t("chooseUsSub")}
          </p>
          <div className="flex gap-5">
            <Link href="#">
              <Image
                src="/images/app-store.png"
                width={162}
                height={50}
                alt="app store"
                className="rounded-md"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/google-play.png"
                width={162}
                height={50}
                alt="google play"
                className="rounded-md"
              />
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/phone.png"
            width={200}
            height={409}
            alt="phone"
            className="absolute -bottom-[55px] right-[200px] -rotate-[4.05deg]"
          />
          <Image
            src="/images/phone.png"
            width={170}
            height={348}
            alt="phone"
            className="absolute -bottom-11 right-[50px] rotate-[5.08deg]"
          />
        </div>
      </div>
    </section>
  );
}
