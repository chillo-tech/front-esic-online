import { blogReducersName } from "utils/blogReducersName";

type TArticle = {
  id: number;
  image: string;
  date: Date;
  title: string;
  description: string;
  shortDescription: string;
  body: string;
};

type TCardSizes = "small" | "medium" | "large";

type TBlogState = {
  articles: TArticle[];
  actualArticles: TArticle[];
  recentsArticles: TArticle[];
  pageArticleLength: number;
  actualPageIndex: number;
};

type TBlogActions =
  | {
      type:
        | typeof blogReducersName.SET_ACTUAL_ARTICLES
        | typeof blogReducersName.SET_ARTICLES
        | typeof blogReducersName.SET_ACTUAL_ARTICLE;
      payload: TArticle[];
    }
  | {
      type:
        | typeof blogReducersName.SET_PAGE_ARTICLE_LENGTH
        | typeof blogReducersName.SET_ACTUAL_PAGE_INDEX;
      payload: number;
    };

export type { TArticle, TCardSizes, TBlogState, TBlogActions };
