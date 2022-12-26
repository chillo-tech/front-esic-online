import Debug from 'components/Debug';
import AllTrainings from 'components/shared/AllTrainings';
import PageHeader from 'components/shared/PageHeader';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import Trainings from 'components/trainings';
import OpenedLayout from 'containers/opened'
import { ApplicationContext } from 'context/ApplicationContext';
import Image from 'next/image';
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';
import { cn, loaderProp } from 'utils/image-loader';

function PageFinancement({id}: {id: string}) {
  const {updateSearchPrams} = useContext(ApplicationContext);
  const [isImageLoading, setLoading] = useState(true);
  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["PageFinancement", id],
    queryFn: () =>
    fetchData({
        path: `pages/${id}`,
        fields: '*'
      }),
      onSuccess: () => updateSearchPrams({path: 'formations', title: "Formations éligibles au CPF"})
  });
  return (
    <OpenedLayout>
      
      {
        isSuccess ? (
          <section className="bg-green-800/20">
            <PageHeader data={data?.data.data}/>
            <div className='container py-10'>
              <RenderHtmlContent classes='text-xl mb-4 py-4' content={data?.data.data.description}/>
            </div>
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