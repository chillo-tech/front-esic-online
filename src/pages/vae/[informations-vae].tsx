import Page from 'components/pages';
import { ApplicationContext } from 'context/ApplicationContext';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';
import {PAGE_PARAMS} from 'utils';

function InformationsVae({id}: {id: string}) {
  const {updateSearchPrams} = useContext(ApplicationContext);
  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["PageFinancement", id],
    queryFn: () =>
    fetchData({
        path: `pages/${id}`,
        fields: PAGE_PARAMS
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

export default InformationsVae

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params['informations-vae'].substring(params['informations-vae'].lastIndexOf("-") + 1);
  return { props: { ...params, id } };
}
