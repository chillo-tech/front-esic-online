"use client";
import { articles } from "components/Blog/mockArticles";
import React, { ReactNode, createContext, useReducer } from "react";
import { BlogReducer } from "./BlogReducer";
import { TBlogActions, TBlogState } from "types";

const initailPageLength = 6;

const BlogContext = createContext<{
  state: TBlogState;
  dispatch: React.Dispatch<TBlogActions>;
}>({
  state: {
    articles,
    actualArticles: articles.slice(0, initailPageLength),
    pageArticleLength: initailPageLength,
    recentsArticles: articles.slice(0, 1),
    actualPageIndex: 1,
  },
  dispatch: () => {},
});

const BlogContextWrapper = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(BlogReducer, {
    articles,
    actualArticles: articles.slice(0, initailPageLength),
    pageArticleLength: initailPageLength,
    recentsArticles: articles.slice(0, 1),
    actualPageIndex: 1,
  });
  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContextWrapper, BlogContext };
