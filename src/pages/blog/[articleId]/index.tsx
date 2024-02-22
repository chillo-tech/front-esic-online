"use client";
import ArticleContent from "components/Blog/ArticleContent";
import BlogLayout from "components/Blog/Layout";

const Article = (props: any) => {
  return (
    <>
      <BlogLayout>
        <ArticleContent articleId={props.articleId as string} />
      </BlogLayout>
    </>
  );
};

export default Article;

export async function getServerSideProps(context: any) {
  const { params } = context;
  return { props: { ...params } };
}
