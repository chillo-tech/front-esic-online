import PageHeader from "components/pages/PageHeader";
import OpenedLayout from "containers/opened";
import Head from "next/head";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getCertificationSubCategory } from "services/certifications";

function CertificationCategory({
  id,
}: {
  id: string;
  libelle: string;
  link: string;
}) {
  const { isSuccess, isLoading, data } = useQuery<any>({
    queryFn: () =>
      getCertificationSubCategory({
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
          <title>{data.data.data.libelle}</title>
          <meta name="description" content={data.data.data.description} />
        </Head>
      ) : null}
      {isSuccess ? (
        <>
          <PageHeader
            title={data.data.data.libelle}
            description={data.data.data.description}
          />
          <main className="container mx-auto pt-5 pb-10"></main>
        </>
      ) : null}
    </OpenedLayout>
  );
}

export default CertificationCategory;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.subcategory.substring(
    params.subcategory.lastIndexOf("-") + 1
  );
  return {
    props: { ...params, id },
  };
}
