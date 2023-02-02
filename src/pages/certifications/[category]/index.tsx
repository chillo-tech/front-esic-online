import Page from "components/pages";
import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "services";

function CertificationCategory({
  id}: {
  id: string;
  libelle: string;
  link: string;
}) {
  const { isSuccess, data } = useQuery<any>({
    queryFn: () =>
    fetchData({
      path: `pages/${id}`,
      fields: `
        *,
        *.*,
        certifications.certifications_id.*
      `
    })
  });
  
  return (
    <>
      {
        isSuccess ? (
         <Page data={data?.data.data}/>
        ) : null
      }
    </>
  )
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
