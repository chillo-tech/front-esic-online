import Head from "next/head";
import OpenedLayout from "containers/opened";
import { useQuery } from "react-query";
import { getSubCategories } from "services/index";
import { slugify } from "utils/slugify";
import PageHeader from 'components/shared/PageHeader';
import classNames from "classnames";
import HomeTrainingItem from "components/shared/HomeTrainingItem";
import React from "react";
function SousCategories({id: subcategoryid, link}: {id:string, link: string}) {
  const { isSuccess, data } = useQuery<any>({
    queryKey: ["SousCategories", subcategoryid],
    queryFn: () =>
      getSubCategories({
        id: subcategoryid as string
      })
  });
  return (
    <OpenedLayout>
      {isSuccess ? (
        <PageHeader data={data?.data.data}/>
      ) : null}
        {isSuccess && data.data.data ? (
          <section className={classNames('bg-app-white', {
            'pt-10 pb-10': data.data.data.formations && data.data.data.formations.length
          })}>
            {
              data?.data?.data?.formations ?
                  (
                      <main className="container mx-auto ">
                        <section className="grid md:grid-cols-3 gap-6">
                          {data?.data?.data?.formations
                              .filter((formation: any) => formation != null && formation.formations_id != null)
                              .map((formation: any, index: number) => (
                                  <HomeTrainingItem
                                      classes="rounded-lg shadow-md pb-2"
                                      training={formation.formations_id}
                                      link={`/nos-formations/${slugify(formation.formations_id.libelle)}-${formation.formations_id.id}`}
                                      key={`${formation.formations_id.id}-${index}`}
                                  />
                              ))}
                        </section>
                      </main>
                  )
                : null}
           </section>
        ) : null}

    </OpenedLayout>
  );
}

export default SousCategories;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.subcategory.substring(params.subcategory.lastIndexOf("-") + 1);
  return { props: { ...params, id, link:`${params.category}/${params.subcategory}` } };
}
