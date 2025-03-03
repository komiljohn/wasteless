import "./globals.css";

import type { Metadata } from "next";
import { Days_One, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const daysOne = Days_One({
  weight: "400",
  variable: "--font-days-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wasteless",
  description: "Wasteless",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable}  ${daysOne.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
