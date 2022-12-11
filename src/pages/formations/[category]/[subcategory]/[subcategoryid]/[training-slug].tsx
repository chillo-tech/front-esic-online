import OpenedLayout from 'containers/opened'
import Head from 'next/head'
import React from 'react'
import { useQuery } from 'react-query';
import { getDetail } from 'services/index';

function Training({id}: {id: string}) {
  const  { isSuccess, isLoading, data} = useQuery<any>({
    queryKey:  ["formations", "detail", id],
    queryFn:  () => getDetail({ 
      id: id.split('-')[1],
    }),
    refetchOnWindowFocus: false,
    staleTime: 3600000, //1jour
    cacheTime: 3600000 //1jour
  });
  return (
    <OpenedLayout>
      <Head>
        <title>{'formations.data.titre'}</title>
        <meta name="description" content={'formations.data.description'} />
      </Head>
      <main>
        <pre>{JSON.stringify(data.data, null, 2)}</pre>
      </main>
    </OpenedLayout>
  )
}


export async function getServerSideProps(context: any ) {
  const {params} = context;
  return { props: { ...params, id: params['training-slug'] } }
}
export default Training