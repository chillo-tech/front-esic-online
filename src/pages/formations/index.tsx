import Items from 'components/items';
import OpenedLayout from 'containers/opened'
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import { useQuery } from 'react-query';
import { getFormations } from 'services';

function Formations() {
  const  { isSuccess, isLoading, data: {data: formations = {data: {libelle: '', description: ''}}} = {} } = useQuery<any>({
    queryKey:  ["formations"],
    queryFn:  getFormations,
    refetchOnWindowFocus: false,
    staleTime: 3600000, //1jour
    cacheTime: 3600000 //1jour
  });
  return (
    <OpenedLayout>
      <Head>
        <title>{formations.data.titre}</title>
        <meta name="description" content={formations.data.description} />
      </Head>
      <div className="w-full bg-cover bg-center" style={{ backgroundImage: "url(images/esic-image-5.jpg)" }}>
        <div className="bg-black/10 bg-gradient-to-r from-secondary w-full h-full">
          <div className="container mx-auto flex py-16 text-white flex-col">
          {isSuccess?
           (
              <>
                <h1 className='font-extralight text-xl'>
                  {formations.data.titre}
                </h1>
                <div className="text-4xl font-extrabold text-center sm:text-left"
                   dangerouslySetInnerHTML={{__html: formations.data.description}} />
              </>
           )
           : null
          }
          </div>
        </div>
      </div>
      <main className='container mx-auto pt-5 pb-10'>
        <Items 
          itemsPath='categories' 
          urlPath='formations'
          fields='id,libelle,souscategories.sousCategories_id.id,souscategories.sousCategories_id.libelle'
        />
      </main>

    </OpenedLayout>
  )
}

export default Formations;