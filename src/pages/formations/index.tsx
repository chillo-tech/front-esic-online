import Debug from "components/Debug";
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
      data: formations = { data: [{ libelle: "", description: "" }] },
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
        <title>{formations.data[0].libelle}</title>
        <meta name="description" content={formations.data[0].description} />
      </Head>
      {isSuccess ? (
        <>
          <PageHeader
            title={formations.data[0].libelle}
            description={formations.data[0].description}
          />
          <main className="container mx-auto pb-5 md:py-10">
            <Items
              itemsPath="categories"
              urlPath="formations"
              data={formations.data[0].menu_category}
            />
          </main>
        </>
      ) : null}
      
    </OpenedLayout>
  );
}

export default Formations;
