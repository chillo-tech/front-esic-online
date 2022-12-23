import HoverCard from "components/pages/HoverCard";
import PageHeader from "components/pages/PageHeader";
import OpenedLayout from "containers/opened";
import Head from "next/head";
import React from "react";
import { useQuery } from "react-query";
import { getCategory } from "services/index";
import { slugify } from "utils/slugify";

function Category({
  id,
  libelle,
  link,
}: {
  id: string;
  libelle: string;
  link: string;
}) {
  const { isSuccess, data: category } = useQuery<any>({
    queryKey: ["category", slugify(libelle), id],
    queryFn: () =>
      getCategory({
        id,
      }),
    refetchOnWindowFocus: false,
    staleTime: 3600000, //1jour
    cacheTime: 3600000, //1jour
  });
  return (
    <OpenedLayout>
      {isSuccess ? (
        <Head>
          <title>{category.data.data.libelle}</title>
          <meta name="description" content={category.data.data.description} />
        </Head>
      ) : null}
      {isSuccess ? (
        <>
          <PageHeader
            title={category.data.data.titre}
            description={category.data.data.description}
          />
          <main className="container mx-auto pt-5 pb-10">
            <section className="grid md:grid-cols-3 gap-6">
              {category.data.data.souscategories.map(
                (souscategory: any, index: number) => (
                  <HoverCard
                    id={souscategory?.sousCategories_id.id}
                    title={souscategory?.sousCategories_id.libelle}
                    image="/images/esic-image-5.jpg"
                    key={`sc-${souscategory?.sousCategories_id}-${index}`}
                    link={`/formations/${link}/${slugify(
                      souscategory?.sousCategories_id.libelle
                    )}-${id}`}
                  />
                )
              )}
            </section>
          </main>
        </>
      ) : null}
    </OpenedLayout>
  );
}

export default Category;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.category.substring(params.category.lastIndexOf("-") + 1);
  const libelle = params.category.substring(
    0,
    params.category.lastIndexOf("-")
  );
  return { props: { ...params, id, libelle, link: params.category } };
}
