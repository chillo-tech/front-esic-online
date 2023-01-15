import Image from 'next/image';import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';
import { cn, loaderProp } from 'utils/image-loader';

function NosClients() {
  const [isImageLoading, setLoading] = useState(true);
  const {
    isSuccess,
    data
  } = useQuery<any>({
    queryKey: ["our-customers"],
    queryFn: () => fetchData({
      path: 'nosclients',
      fields: 'Libelle,clients.*'
    })
  });
  return (
    <>
        {(isSuccess && data?.data.data[0].clients)? (
          <section className=' pt-20 pb-32 bg-app-light-green'>
            <div className="container">
              <h2 className="font-bold text-3xl md:text-5xl mb-12 text-center">{data?.data.data[0].Libelle}</h2>
              <div className="flex justify-center">
                <div className={`grid gap-4 md:grid-cols-3`}>
                  {data?.data.data[0].clients
                  .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
                  .map((training:any)=> (
                      <article className='w-80' key={training.id}>
                        {
                          training.image ? (
                            <div className='border border-red-600 relative w-full h-44 border border-app-light-green !rounded-2xl overflow-hidden'>
                              <Image
                                fill={true}
                                src={`${process.env.API_URL}/assets/${training.image}?w=200&h=100fill=true`}
                                alt={training.libelle}
                                loader={loaderProp}
                                unoptimized
                                className={cn(
                                  'overflow-hidden relative object-contain duration-700 ease-in-out group-hover:opacity-75 !rounded-t-sm',
                                  isImageLoading
                                    ? 'scale-110 blur-2xl grayscale'
                                    : 'scale-100 blur-0 grayscale-0'
                                )}
                                onLoadingComplete={() => setLoading(false)}
                              />
                            </div>
                          ): 
                          null 
                        }
                      </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ): null }
    </>
  )
}

export default NosClients
