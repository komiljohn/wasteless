import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

import InstagramIcon from "/public/icons/instagram.svg";
import LogoIcon from "/public/icons/logo.svg";
import TelegramIcon from "/public/icons/telegram.svg";
import YouTubeIcon from "/public/icons/youtube.svg";

import YandexMap from "./Map";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-white py-[30px]">
      <div className="container mx-auto px-4 flex justify-between max-sm:flex-col max-sm:gap-[37px]">
        <div className="max-w-[290px] max-sm:text-center max-sm:mx-auto">
          <LogoIcon className="w-[199px] h-[43px] max-sm:mx-auto max-sm:text-primary" />
          <p className="text-muted-foreground font-medium mt-3 mb-[109px] max-sm:mb-0 max-sm:text-foreground max-sm:font-normal max-sm:text-xs max-sm:max-w-[292px]">
            {t("footerText")}
          </p>
          <p className="font-medium max-sm:hidden">&copy; Wasteless 2025</p>
        </div>
        <ul className="flex flex-col gap-5 max-sm:gap-[13px] max-sm:text-center">
          <li className="font-medium max-sm:font-normal max-sm:text-sm">
            <Link href={"#"}>{t("project")}</Link>
          </li>
          <li className="font-medium max-sm:font-normal max-sm:text-sm">
            <Link href={"#"}>{t("aboutUs")}</Link>
          </li>
          <li className="font-medium max-sm:font-normal max-sm:text-sm">
            <Link href={"#"}>{t("workingRegime")}</Link>
          </li>
          <li className="font-medium max-sm:font-normal max-sm:text-sm">
            <Link href={"#"}>{t("ecoBlog")}</Link>
          </li>
          <li className="font-medium max-sm:font-normal max-sm:text-sm">
            <Link href={"#"}>{t("contact")}</Link>
          </li>
        </ul>
        <div className="mx-auto sm:hidden">
          <p className="flex gap-3.5 items-center mb-3">
            <Mail size={20} className="stroke-primary" />
            <a
              href="mailto:info@wasteless.uz"
              className="text-sm leading-[17px]"
            >
              info@wasteless.uz
            </a>
          </p>
          <p className="flex gap-3.5 items-center">
            <Phone size={20} className="fill-primary stroke-white" />
            <a href="tel:info@wasteless.uz" className="text-sm leading-[17px]">
              +998 50 505 14 33
            </a>
          </p>
        </div>
        <ul className="flex gap-[15px] mx-auto sm:hidden">
          <li className="border rounded-full p-1.5">
            <TelegramIcon />
          </li>
          <li className="border rounded-full p-1.5">
            <InstagramIcon />
          </li>
          <li className="border rounded-full p-1.5">
            <YouTubeIcon />
          </li>
        </ul>
        <div className="text-center text-sm sm:hidden">
          <p className="sm:hidden">&copy; Wasteless 2025</p>
          <p className="sm:hidden">All rights reserved</p>
        </div>
        <div className="max-md:hidden">
          <YandexMap />
        </div>
      </div>
    </footer>
  );
}
