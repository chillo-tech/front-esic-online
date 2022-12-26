import PageHeader from "components/shared/PageHeader";
import OpenedLayout from "containers/opened";
import Head from "next/head";
import React from "react";
import { useQuery } from "react-query";
import { getCertificationCategory } from "services";

function CertificationCategory({
  id}: {
  id: string;
  libelle: string;
  link: string;
}) {
  const { isSuccess, isLoading, data } = useQuery<any>({
    queryFn: () =>
      getCertificationCategory({
        id,
      })
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
            data={data.data.data}
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
  const id = params.category.substring(params.category.lastIndexOf("-") + 1);
  const libelle = params.category.substring(
    0,
    params.category.lastIndexOf("-")
  );
  return {
    props: { ...params, id, libelle, link: params.category },
  };
}
