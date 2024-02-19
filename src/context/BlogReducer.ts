import { TBlogActions, TBlogState } from "types";
import { blogReducersName } from "utils";

const BlogReducer = (state: TBlogState, action: TBlogActions) => {
  const { type, payload } = action;
  console.log("condition", blogReducersName.SET_ACTUAL_PAGE_INDEX === type);
  switch (type) {
    case blogReducersName.SET_ARTICLES:
      return {
        ...state,
        articles: payload,
      };
    case blogReducersName.SET_ACTUAL_ARTICLES:
      return {
        ...state,
        actualArticles: payload,
      };
    case blogReducersName.SET_PAGE_ARTICLE_LENGTH:
      return {
        ...state,
        pageArticleLength: payload,
      };
    case blogReducersName.SET_ACTUAL_ARTICLE:
      return {
        ...state,
        actualArticle: payload,
      };
    case blogReducersName.SET_ACTUAL_PAGE_INDEX:
      console.log("prev page", state.actualPageIndex);
      console.log("next page", payload);
      return {
        ...state,
        actualArticles: state.articles.slice(
          (payload - 1) * state.pageArticleLength,
          payload * state.pageArticleLength
        ),
        actualPageIndex: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export { BlogReducer };
