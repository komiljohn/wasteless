import { useTranslations } from "next-intl";
import React from "react";

export default function YouTubeBlog() {
  const t = useTranslations();

  return (
    <section
      id="ecoBlog"
      className="container mx-auto px-4 pt-[90px] max-sm:pt-[30px]"
    >
      <p className="font-days-one mb-[54px] max-sm:mb-5 text-[40px] leading-[51px] text-primary text-center max-sm:text-xl max-sm:leading-[25px]">
        {t("youtubeBlog")}
      </p>
      <div className="grid grid-cols-4 gap-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {youtubeVideos.map((video) => (
          <div key={video.id}>
            <iframe
              key={video.id}
              className="rounded-[10px] mx-auto w-full h-[200px] max-sm:w-full border"
              src={video.image}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <p className="text-xl font-medium mt-[18px]">{t(video.title)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export const youtubeVideos = [
  {
    id: 1,
    image: "https://www.youtube.com/embed/Tx8sE5mm2Uw?si=QZTMAbd2tLRDBO8X",
    title: "youtube1",
  },
  {
    id: 2,
    image: "https://www.youtube.com/embed/5sbj0k0aGRA?si=mpr13xeTbpvu6Jmo",
    title: "youtube2",
  },
  {
    id: 3,
    image: "https://www.youtube.com/embed/70W7C6Hnxys?si=TJKUtC7sQKRxEpX0",
    title: "youtube3",
  },
  {
    id: 4,
    image: "https://www.youtube.com/embed/tluQ1frbFNo?si=N91DpRdABeCkVRxd",
    title: "youtube4",
  },
];
