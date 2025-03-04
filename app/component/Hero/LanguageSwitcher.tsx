import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale } from "@/i18n/request";

export default function LanguageSwitcher({
  className,
}: {
  className?: string;
}) {
  const locale = useLocale();
  const router = useRouter();

  const handleLocaleChange = (locale: Locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={twMerge(
          "flex gap-2 items-center max-md:text-foreground shadow-none border-none",
          className,
        )}
      >
        <Globe size={20} />
        <span className="text-lg font-semibold">{locale}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem id="uz" onSelect={() => handleLocaleChange("uz")}>
          O'zbekcha
        </DropdownMenuItem>
        <DropdownMenuItem id="en" onSelect={() => handleLocaleChange("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem id="ru" onSelect={() => handleLocaleChange("ru")}>
          Русский
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
