import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

import LogoIcon from "/public/icons/logo.svg";

import YandexMap from "./Map";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="container mx-auto px-4 flex justify-between py-[30px]">
      <div className="max-w-[290px]">
        <LogoIcon className="w-[199px] h-[43px]" />
        <p className="text-muted-foreground font-medium mt-3 mb-[109px]">
          {t("footerText")}
        </p>
        <p className="font-medium">&copy; Wasteless 2025</p>
      </div>
      <ul className="flex flex-col gap-5">
        <li className="font-medium">
          <Link href={"#"}>{t("project")}</Link>
        </li>
        <li className="font-medium">
          <Link href={"#"}>{t("aboutUs")}</Link>
        </li>
        <li className="font-medium">
          <Link href={"#"}>{t("workingRegime")}</Link>
        </li>
        <li className="font-medium">
          <Link href={"#"}>{t("ecoBlog")}</Link>
        </li>
        <li className="font-medium">
          <Link href={"#"}>{t("contact")}</Link>
        </li>
      </ul>
      <YandexMap />
    </footer>
  );
}
