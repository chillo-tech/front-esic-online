import { BlogContext } from "context/BlogContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { TArticle } from "types";

const articleMaxCount = 3;

const useArticleContent = (articleId: string) => {
  const { state, dispatch } = useContext(BlogContext);
  const [article, setArticle] = React.useState<TArticle | undefined>();
  const router = useRouter();
  useEffect(() => {
    const actualArticle = state.articles.find(
      (article) => article.id === parseInt(articleId)
    );

    dispatch({ type: "SET_PAGE_ARTICLE_LENGTH", payload: articleMaxCount });
    if (!actualArticle) {
      router.replace("/404");
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
  }, [articleId]);
  return {
    article,
    state,
  };
};

export { useArticleContent };
