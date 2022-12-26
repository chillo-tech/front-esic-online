import Debug from "components/Debug";
import HoverCard from "components/shared/HoverCard";
import PageHeader from "components/shared/PageHeader";
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
      })
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
            data={category.data.data}
          />
          <section className="bg-red-50">
            <main className="container mx-auto pt-5 pb-10">
              <section className="grid md:grid-cols-3 gap-6">
                {category.data.data.souscategories.map(
                  (souscategory: any, index: number) => (
                    <HoverCard
                      id={souscategory?.souscategories_id.id}
                      title={souscategory?.souscategories_id.libelle}
                      image={souscategory.souscategories_id.image ? souscategory.souscategories_id.image: "/images/esic-image-5.jpg"}
                      key={`sc-${souscategory?.souscategories_id}-${index}`}
                      link={`/formations/${link}/${slugify(
                        souscategory?.souscategories_id.libelle
                      )}-${souscategory?.souscategories_id.id}`}
                    />
                  )
                )}
              </section>
            </main>

          </section>
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
