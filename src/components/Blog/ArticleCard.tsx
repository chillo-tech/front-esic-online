import Image from "next/image";
import React from "react";
import { TArticle, TCardSizes } from "types";
import { getSmallDisplayDate } from "utils/DateFormat";
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from "next/router";

const ArticleCard = ({
  article,
  size,
}: {
  article: TArticle;
  size: TCardSizes;
}) => {
  const router = useRouter();
  return (
    <div>
      {(() => {
        switch (size) {
          case "large":
            return (
              <div className="flex items-center justify-center gap-8 h-[270px]">
                <div className="h-full w-1/2 overflow-hidden grow">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={1920}
                    height={200}
                    className="h-full object-cover"
                  />
                </div>
                <div className="h-full w-1/2 overflow-hidden grow flex flex-col justify-between">
                  <p className="m-2 flex gap-2 font-medium text-[#0A7928] items-center">
                    <span className="bg-[#0A7928] h-2 w-2 rounded-[50%]"></span>
                    {getSmallDisplayDate(article.date)}
                  </p>
                  <h3 className="text-xl flex items-center justify-between text-slate-900 font-bold">
                    <span>{article.title}</span>
                    <button
                      type="button"
                      className="text-slate-900 border-none flex items-center justify-center bg-transparent"
                    >
                      <MdArrowOutward />
                    </button>
                  </h3>
                  <p className="my-2 text-md text-gray-600 font-medium">
                    {article.description}
                  </p>
                  <button
                    onClick={() => router.push(`/blog/${article.id}`)}
                    className="bg-rose-300 cursor-pointer hover:bg-rose-500 font-medium text-rose-900 rounded-2xl p-1 px-3 w-fit"
                  >
                    Savoir Plus
                  </button>
                </div>
              </div>
            );
          case "medium":
            return (
              <div className="flex max-w-[95vw] sm:max-w-[48vw] mx-auto md:max-w-[33.333vw] items-center flex-col justify-center gap-4 h-[442px]">
                <div
                  className="h-1/2 w-full overflow-hidden "
                  onClick={() => router.push(`/blog/${article.id}`)}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={1920}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="m-2 flex gap-2 font-medium text-[#0A7928] items-center">
                    <span className="bg-[#0A7928] h-2 w-2 rounded-[50%]"></span>
                    {getSmallDisplayDate(article.date)}
                  </p>
                  <h3
                    className="text-xl flex items-center justify-between text-slate-900 font-bold"
                    onClick={() => router.push(`/blog/${article.id}`)}
                  >
                    <span className="cursor-pointer">{article.title}</span>
                    <button
                      type="button"
                      className="cursor-pointer text-slate-900 border-none flex items-center justify-center bg-transparent"
                    >
                      <MdArrowOutward />
                    </button>
                  </h3>
                  <p className="my-2 text-sm text-gray-500">
                    {article.shortDescription}
                  </p>
                </div>
              </div>
            );
        }
      })()}
    </div>
  );
};

export default ArticleCard;
