"use client";

import { Locale } from "@/i18n/request";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Home() {
  const t = useTranslations("HomePage");
  const router = useRouter();

  const handleLocaleChange = (locale: Locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <div>
      <h1 className="text-red-500 p-10 text-center">{t("title")}</h1>
      <div className="flex flex-col gap-8">
        <button onClick={() => handleLocaleChange("uz")}>ozbekcha</button>
        <button onClick={() => handleLocaleChange("ru")}>русский</button>
        <button onClick={() => handleLocaleChange("en")}>english</button>
      </div>
    </div>
  );
}
