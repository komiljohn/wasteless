import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

import LogoIcon from "/public/icons/logo.svg";

import LanguageSwitcher from "./LanguageSwitcher";

export default function HeaderNavigation() {
  const t = useTranslations();

  return (
    <nav className="bg-primary max-md:bg-transparent rounded-2xl py-[15px] px-[52px] max-lg:px-5 flex items-center max-lg:justify-between gap-[70px] max-lg:gap-10 max-md:px-2 max-md:py-[5px]">
      <div className="py-[9px] pl-2.5 max-md:pl-0 pr-[33px] max-md:pr-0 bg-white max-md:bg-transparent rounded-full text-primary max-md:flex max-md:justify-between max-md:items-center max-md:grow">
        <LogoIcon className="w-[165px] h-[35px] max-sm:w-[140px] max-sm:h-[32px]" />
        <LanguageSwitcher className="md:hidden" />
      </div>
      <ul className="flex gap-10 max-lg:gap-4 max-md:hidden">
        <li className="text-base max-lg:text-sm font-medium text-white">
          <Link href="#">{t("project")}</Link>
        </li>
        <li className="text-base max-lg:text-sm font-medium text-white">
          <Link href="#">{t("aboutUs")}</Link>
        </li>
        <li className="text-base max-lg:text-sm font-medium text-white">
          <Link href="#">{t("workingRegime")}</Link>
        </li>
        <li className="text-base max-lg:text-sm font-medium text-white">
          <Link href="#">{t("ecoBlog")}</Link>
        </li>
        <li className="text-base max-lg:text-sm font-medium text-white">
          <Link href="#">{t("contact")}</Link>
        </li>
      </ul>
    </nav>
  );
}
