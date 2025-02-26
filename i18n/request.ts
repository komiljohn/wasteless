import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export type Locale = "uz" | "ru" | "en";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookiesData = await cookies();
  const locale = cookiesData.get("NEXT_LOCALE")?.value || "uz"; // Fallback to 'en' if requestLocale is undefined

  const config = await {
    locale,
    timeZone: "Asia/Tashkent",
    messages: (await import(`./messages/${locale}.json`)).default,
  };

  return config;
});
