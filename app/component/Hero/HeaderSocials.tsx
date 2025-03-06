import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import OpacityWhenVisible from "@/components/animation/OpacityWhenVisible";

import LanguageSwitcher from "./LanguageSwitcher";

export default function HeaderSocials() {
  return (
    <OpacityWhenVisible>
      <div className="py-4 px-[26px] flex items-center justify-between max-md:hidden">
        <ul className="flex gap-[26px]">
          <li>
            <Link href="https://t.me/wastelessuz" target="_blank">
              <Image src="/icons/telegram.svg" alt="" width={20} height={20} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/wasteless_uz/"
              target="_blank"
            >
              <Image src="/icons/instagram.svg" alt="" width={20} height={20} />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@gowasteless" target="_blank">
              <Image src="/icons/youtube.svg" alt="" width={20} height={20} />
            </Link>
          </li>
        </ul>
        <div className="flex">
          <LanguageSwitcher />
          <p className="flex gap-2 items-center ml-[95px] max-lg:ml-12">
            <Phone size={20} />
            <a href="tel:998714544545" className="text-lg font-semibold">
              +998 (71) 454-45-45
            </a>
          </p>
        </div>
      </div>
    </OpacityWhenVisible>
  );
}
