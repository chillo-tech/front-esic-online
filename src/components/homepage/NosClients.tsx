import Image from 'next/image';import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';
import { cn, loaderProp } from 'utils/image-loader';
import SectionTitle from 'components/shared/SectionTitle';
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
          <section className='md:pt-20 md:pb-32 bg-app-light-green'>
            <SectionTitle text={data?.data.data[0].Libelle} underline={false} />
            <div className="flex justify-center">
              <div className={`grid md:gap-6 md:grid-cols-4`}>
                {data?.data.data[0].clients
                .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
                .map((training:any)=> (
                    <article className='w-80 md:w-48 lg:w-80 flex items-center justify-center' key={training.id}>
                      {
                        training.image ? (
                          <div className='border border-red-600 relative md:mb-0 mb-5 w-[236px] h-[100px] md:h-[172px] border border-app-light-green !rounded-2xl overflow-hidden'>
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
          </section>
        ): null }
    </>
  )
}

export default NosClients
