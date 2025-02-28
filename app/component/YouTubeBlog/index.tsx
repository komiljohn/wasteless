import { useTranslations } from "next-intl";
import React from "react";

export default function YouTubeBlog() {
  const t = useTranslations();

  return (
    <section className="container mx-auto px-4 mb-[90px] max-sm:mb-10">
      <p className="font-days-one mb-[54px] max-sm:mb-5 text-[40px] leading-[51px] text-primary text-center max-sm:text-xl max-sm:leading-[25px]">
        {t("youtubeBlog")}
      </p>
      <div className="grid grid-cols-4 gap-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {youtubeVideos.map((video) => (
          <iframe
            key={video.id}
            className="rounded-[10px] mx-auto w-[300px] h-[200px]  max-sm:w-full"
            src={video.image}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ))}
      </div>
    </section>
  );
}

export const youtubeVideos = [
  {
    id: 1,
    image: "https://www.youtube.com/embed/Tx8sE5mm2Uw?si=QZTMAbd2tLRDBO8X",
    title: "Что Происходит с Пластиком?",
    text: "Что Происходит с Пластиком? Учебный фильм",
  },
  {
    id: 2,
    image: "https://www.youtube.com/embed/5sbj0k0aGRA?si=mpr13xeTbpvu6Jmo",
    title: "Как Спасют Мир от Пластика?",
    text: "Как Спасют Мир от Пластика?",
  },
  {
    id: 3,
    image: "https://www.youtube.com/embed/70W7C6Hnxys?si=TJKUtC7sQKRxEpX0",
    title: "Как Человек Убивает Планету?",
    text: "Как Человек Убивает Планету?",
  },
  {
    id: 4,
    image: "https://www.youtube.com/embed/tluQ1frbFNo?si=N91DpRdABeCkVRxd",
    title: "Как Правильно Сдавать Бутылку на Переработку?",
    text: "Как Правильно Сдавать Бутылку на Переработку?",
  },
];
