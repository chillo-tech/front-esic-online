import Debug from 'components/Debug';
import OpenedLayout from 'containers/opened'
import Image from 'next/image';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { read } from 'services/index';
import { cn, loaderProp } from 'utils/image-loader';

function CompteFormationCpf({id}: {id: string}) {
  
  const [isImageLoading, setLoading] = useState(true);
  const {
    isSuccess,
    isLoading,
    data,
  } = useQuery<any>({
    queryKey: ["CompteFormationCpf", id],
    queryFn: () =>
      read({
        path: `page/${id}`,
        fields: '*'
      }),
  });
  return (
    <OpenedLayout>
     
      {
        isSuccess ? (
          <>
            <section className="grid bg-slate-100 md:grid-cols-2 items-center text-gray-700">
              <article className='px-36'>
                  <div className="flex text-xl font-extralight">
                    {data?.data.data.souslibelle}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold">
                    {data?.data.data.libelle}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.data.data.description,
                    }}
                    className="my-5 text-xl font-extralight " />
              </article>
             <div className="relative" style={{height: '450px'}}>
             <div className="bg-black opacity-30 w-full absolute left-0 top-0 bottom-0 right-0 z-20" />
                    <Image
                      fill={true}
                      src={`${process.env.API_URL}/assets/${data?.data.data.image}`}
                      alt={data?.data.data.libelle}
                      loader={loaderProp}
                      unoptimized
                      className={cn(
                        'relative object-cover duration-700 ease-in-out group-hover:opacity-75',
                        isImageLoading
                          ? 'scale-110 blur-2xl grayscale'
                          : 'scale-100 blur-0 grayscale-0'
                      )}
                      onLoadingComplete={() => setLoading(false)}
                    />
             </div>
            </section>
             <section className="w-full bg-cover bg-cente relative h-96">
              <div className="bg-gradient-to-r from-sky-900 bg-black/50 h-96 px-4">
              {
                data?.data.data.image ? (
                  <>
                    <div className="bg-black/10 bg-gradient-to-r from-black/80 w-full h-96 absolute left-0 top-0 bottom-0 right-0 z-20" />
                    <Image
                      fill={true}
                      src={`${process.env.API_URL}/assets/${data?.data.data.image}`}
                      alt={data?.data.data.libelle}
                      loader={loaderProp}
                      unoptimized
                      className={cn(
                        'relative object-cover duration-700 ease-in-out group-hover:opacity-75',
                        isImageLoading
                          ? 'scale-110 blur-2xl grayscale'
                          : 'scale-100 blur-0 grayscale-0'
                      )}
                      onLoadingComplete={() => setLoading(false)}
                    />
                  </>
                ): 
                null 
              }
                <div className="container mx-auto flex relative z-20">
                  <div className="max-w-4xl md:py-16 md:pt-24 text-white">
                    <h2 className="text-4xl mt-10 md:text-5xl font-extrabold">
                      {data?.data.data.libelle}
                    </h2>
                    <div className="flex">
                      {data?.data.data.souslibelle}
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.data.data.short_description,
                      }}
                      className="my-10"
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : null
      }
    </OpenedLayout>
  )
}

export default CompteFormationCpf
export async function getServerSideProps(context: any) {
  const { query: {id} } = context;
  return { props: { id } };
}
