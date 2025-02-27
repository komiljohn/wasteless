import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

import LogoIcon from "/public/icons/logo.svg";

export default function HeaderNavigation() {
  const t = useTranslations();

  return (
    <nav className="bg-primary rounded-2xl py-[15px] px-[52px] flex items-center gap-[70px]">
      <div className="py-[9px] pl-2.5 pr-[33px] bg-white rounded-full text-primary">
        <LogoIcon className="w-[165px] h-[35px] " />
      </div>
      <ul className="flex gap-10">
        <li className="text-base font-medium text-white">
          <Link href="#">{t("project")}</Link>
        </li>
        <li className="text-base font-medium text-white">
          <Link href="#">{t("aboutUs")}</Link>
        </li>
        <li className="text-base font-medium text-white">
          <Link href="#">{t("workingRegime")}</Link>
        </li>
        <li className="text-base font-medium text-white">
          <Link href="#">{t("ecoBlog")}</Link>
        </li>
        <li className="text-base font-medium text-white">
          <Link href="#">{t("contact")}</Link>
        </li>
      </ul>
    </nav>
  );
}
