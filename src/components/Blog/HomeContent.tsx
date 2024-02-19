import React, { useContext } from "react";
import Pagination from "./Pagination";
import ArticleCard from "./ArticleCard";
import SectionTitle from "./SectionTitle";
import { BlogContext } from "context/BlogContext";
import Image from "next/image";
import { articles } from "./mockArticles";

const HomeContent = () => {
  const { state } = useContext(BlogContext);

  return (
    <>
      <Image
        src="/images/placeholder.png"
        alt="hero"
        width={1920}
        height={200}
        className="relative h-[300px] object-cover my-4"
      />
      <div className="my-4 py-4 container">
        <SectionTitle title="Articles de blog récents" />
        <div className="hidden sm:block my-4 mb-8">
          {state.recentsArticles.map((article, index) => {
            return (
              <div key={`article-${article.id}-${index}`} className="mb-7">
                <ArticleCard size="large" article={article} />
              </div>
            );
          })}
        </div>
        <div className="sm:hidden grid grid-cols-1 gap-8">
          {state.recentsArticles.map((article, index) => {
            return (
              <div key={`article-${article.id}-${index}`} className="pb-7">
                <ArticleCard article={article} size="medium" />
              </div>
            );
          })}
        </div>
        <SectionTitle title="Tous les articles du blog" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {state.actualArticles.map((article, index) => {
            return (
              <div key={`article-${article.id}-${index}`} className="pb-7">
                <ArticleCard article={article} size="medium" />
              </div>
            );
          })}
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default HomeContent;
