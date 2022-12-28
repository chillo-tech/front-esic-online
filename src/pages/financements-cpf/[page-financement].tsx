import AllTrainings from 'components/shared/AllTrainings';
import Articles from 'components/shared/Articles';
import PageHeader from 'components/shared/PageHeader';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import Trainings from 'components/trainings';
import OpenedLayout from 'containers/opened'
import { ApplicationContext } from 'context/ApplicationContext';
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';

function PageFinancement({id}: {id: string}) {
  const {updateSearchPrams} = useContext(ApplicationContext);
  const base = 'id,libelle,souslibelle,ordre,image,description,abstrait';
  const articles = 'articles.id,articles.libelle,articles.description';
  const pages = 'pages.pages_id.id,pages.pages_id.libelle,pages.pages_id.image,pages.pages_id.description,pages.pages_id.abstrait';
  const fields=`${base},${articles},${pages}`
  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["PageFinancement", id],
    queryFn: () =>
    fetchData({
        path: `pages/${id}`,
        fields
      }),
      onSuccess: () => updateSearchPrams({path: 'formations', title: "Formations éligibles au CPF"})
  });
  return (
    <OpenedLayout>
      
      {
        isSuccess ? (
          <section className="bg-green-800 bg-opacity-10">
            <PageHeader data={data?.data.data}/>
            <div className='container'>
              <RenderHtmlContent classes='text-xl mb-4 py-14' content={data?.data.data.description}/>
            </div>
            <section className='grid bg-slate-100 '>
              <div className='container'>
                <Articles data={data?.data.data.articles}/>
              </div>
            </section>
            <section className="bg-white">
              <Trainings title = "Formations éligibles au CPF"/>
              <div className="container pb-5">
                <AllTrainings />
              </div>
            </section>
          </section>
        ) : null
      }
    </OpenedLayout>
  )
}

export default PageFinancement

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params['page-financement'].substring(params['page-financement'].lastIndexOf("-") + 1);
  return { props: { ...params, id } };
}