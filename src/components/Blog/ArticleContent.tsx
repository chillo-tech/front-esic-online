import { BlogContext } from "context/BlogContext";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { TArticle } from "types";
import SectionTitle from "./SectionTitle";
import Section from "../../containers/components/Section";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";

const articleMaxCount = 3;

const ArticleContent = ({ articleId }: { articleId: string }) => {
  const { state, dispatch } = useContext(BlogContext);
  const [article, setArticle] = React.useState<TArticle | undefined>();
  const router = useRouter();
  useEffect(() => {
    const actualArticle = state.articles.find(
      (article) => article.id === parseInt(articleId)
    );

    dispatch({ type: "SET_PAGE_ARTICLE_LENGTH", payload: articleMaxCount });
    if (!actualArticle) {
      router.push("/404");
      return;
    }
    setArticle(() => {
      if (actualArticle.linkedArticles) {
        const linkedArticles: TArticle[] = [];
        actualArticle.linkedArticles.forEach((article) => {
          const linkedArticle = state.articles.find(
            (art) => art.id === article
          );
          if (linkedArticle) linkedArticles.push(linkedArticle);
        });

        dispatch({ type: "SET_ACTUAL_PAGE_INDEX", payload: 1 });
        dispatch({
          type: "SET_ARTICLES",
          payload: linkedArticles,
        });
        dispatch({
          type: "SET_ACTUAL_ARTICLES",
          payload: linkedArticles.slice(0, articleMaxCount),
        });
      }
      return actualArticle;
    });
  }, []);

  return article ? (
    <div>
      <Image
        src={article.image}
        width={1920}
        height={250}
        alt={article.title}
        className="h-[350px] w-full py-7 object-cover"
      />
      <div className="container">
        <SectionTitle title={article.title} />
        {article.sections.map((section, id) => {
          return <Section section={section} key={id} />;
        })}
      </div>
      <div className="container">
        {state.actualArticles.length > 0 && (
          <>
            <h3>Tous les articles du blog</h3>
            <div className="grid grid-cols-3 gap-4">
              {state.actualArticles.map((linkedArticle, index) => {
                if (!linkedArticle) return null;
                return (
                  <ArticleCard
                    size="medium"
                    key={index}
                    article={linkedArticle}
                  />
                );
              })}
            </div>
          </>
        )}
        <Pagination />
      </div>
    </div>
  ) : (
    <div>Nous cherchosn l'article</div>
  );
};

export default ArticleContent;
