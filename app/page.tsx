"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { Locale } from "@/i18n/request";

import HeroSection from "./component/Hero";

export default function Home() {
  const t = useTranslations("HomePage");
  const router = useRouter();

  const handleLocaleChange = (locale: Locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <div>
      <HeroSection />
      <h1 className="text-red-500 p-10 text-center">{t("title")}</h1>
      <div className="flex flex-col gap-8">
        <button onClick={() => handleLocaleChange("uz")}>ozbekcha</button>
        <button onClick={() => handleLocaleChange("ru")}>русский</button>
        <button onClick={() => handleLocaleChange("en")}>english</button>
      </div>
    </div>
  );
}
