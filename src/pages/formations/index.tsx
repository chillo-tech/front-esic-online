import Items from "components/items";
import PageHeader from "components/pages/PageHeader";
import OpenedLayout from "containers/opened";
import Head from "next/head";
import React from "react";
import { useQuery } from "react-query";
import { getFormations } from "services";

function Formations() {
  const {
    isSuccess,
    isLoading,
    data: {
      data: formations = { data: { libelle: "", description: "" } },
    } = {},
  } = useQuery<any>({
    queryKey: ["formations"],
    queryFn: getFormations,
    refetchOnWindowFocus: false,
    staleTime: 3600000, //1jour
    cacheTime: 3600000, //1jour
  });
  return (
    <OpenedLayout>
      <Head>
        <title>{formations.data.titre}</title>
        <meta name="description" content={formations.data.description} />
      </Head>
      {isSuccess ? (
        <PageHeader
          title={formations.data.titre}
          description={formations.data.description}
        />
      ) : null}
      <main className="container mx-auto pb-5">
        <Items
          itemsPath="categories"
          urlPath="formations"
          fields="id,libelle,souscategories.sousCategories_id.id,souscategories.sousCategories_id.libelle"
        />
      </main>
    </OpenedLayout>
  );
}

export default Formations;
