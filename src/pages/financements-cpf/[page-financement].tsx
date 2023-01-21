import Page from 'components/pages';
import { ApplicationContext } from 'context/ApplicationContext';
import React, { useContext } from 'react'
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
    <>
      {
        isSuccess ? (
         <Page displayTrainings={true} data={data?.data.data}/>
        ) : null
      }
    </>
  )
}

export default PageFinancement

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params['page-financement'].substring(params['page-financement'].lastIndexOf("-") + 1);
  return { props: { ...params, id } };
}